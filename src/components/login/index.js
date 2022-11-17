import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { DO_LOGIN } from '../../graphql/login/mutations';
import { 
  Container,
  BackgroundCenter,
  ContainerBody,
  ContainerCenter,
  ContainerInput,
  TitleComponent,
  LostPassComponent,
  ErrorText 
} from './styled';
import InputComponent from './components/input-component';
import UserLogin from './../../../assets/login/ic_user.png';
import PasswordLogin from './../../../assets/login/ic_pass.png';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonComponent from '../../commons/components/button-component';

const Login = ({navigation}) => {
    const [doLogin ] = useMutation(DO_LOGIN);
    const [cellphone, setCellPhone] = useState('+573208335263');
    const [password, setPassword] = useState('123456');
    const [errorAlert, setErrorAlert] = useState(false);

    const handleSubmit = () => {
      doLogin({variables: {cellphone, password}})
      .then(result => {
        if(result.data.login.__typename === "ValidationErrors"){
          setErrorAlert(true);
        }
        if(result.data.login.token !== undefined){
          AsyncStorage.setItem('user-token', result.data.login.token);
          navigation.navigate('clients');
        }
      })
      .catch((err) => {console.log(err)})
    };

  return (
    <Container>
      <BackgroundCenter />
      <ContainerCenter>
        <ContainerBody>
          <Ionicons name="person-circle" size={180} color="#20B2AA" />
          <TitleComponent> Iniciar sesión</TitleComponent>
          <ContainerInput>
            <InputComponent placeholder='Phone' name={cellphone} setName={setCellPhone} img={UserLogin}/>
            <InputComponent placeholder='Password'name={password}  setName={setPassword} img={PasswordLogin}/>
          </ContainerInput>
          {errorAlert !== false ? <ErrorText>Usuario o Contraseña invalida!!</ErrorText>
            : null}
          <LostPassComponent> ¿Olvidaste tu contraseña?</LostPassComponent>
        </ContainerBody>
        <ButtonComponent title="Iniciar" onClick={handleSubmit}/>
        </ContainerCenter>
    </Container>
  );
}

export default Login;
