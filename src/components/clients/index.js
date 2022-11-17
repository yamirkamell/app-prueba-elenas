import { useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, ContainerScrollView, ContainerHeader, TitleComponent, ContainerClient, ContainerButtons } from './styled';
import { Ionicons, Feather } from '@expo/vector-icons'; 
import ButtonComponent from '../../commons/components/button-component';
import ModalComponent from './components/modal-component';
import { GET_CLIENTS } from '../../graphql/clients/queries';

const Clients = ({navigation}) => {
  const [getClients, results] = useLazyQuery(GET_CLIENTS);
  const [clients, setClients] = useState(results?.data?.clientsSearch.results);
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [clientSelected, setClientSelected] = useState(0);


  useEffect(() => {
    getClients();
    setClients(results?.data?.clientsSearch.results);
  }, [results.data]);

  const handleDelete = () => {
    AsyncStorage.removeItem('user-token');
    navigation.navigate('login');
  };

  const onPressValidate = (id, idUser) => {
    switch (id) {
      case 1:
        setTitle('Agregar Cliente');
        setClientSelected(idUser);
        return setModalVisible(true);
      default:
        setTitle('Editar Cliente');
        setClientSelected(idUser);
        return setModalVisible(true);
    }
  }

  const HandleAddClient = () => {
    onPressValidate(1, 0)
  }

  return (
    <Container>
      <ContainerScrollView contentContainerStyle={{alignItems: 'center'}} >
        <ContainerHeader>
          <TitleComponent>Clientes</TitleComponent>
        </ContainerHeader>
        {clients?.map(item => (
          <ContainerClient key={item.id}> 
            <Ionicons name="person-circle" size={30} color="#20B2AA" />
            <View>
              <Text>{item.firstName} {item.lastName}</Text>
              <Text> C.C {item.cedula}</Text>
              <Text>{item.cellphone}</Text>
            </View>
            <Feather name="edit" size={24} color="#20B2AA" onPress={() =>{onPressValidate(0, item.id)}}/>
          </ContainerClient>
        ))}
        <ContainerButtons>
          <ButtonComponent title="Agregar nuevo cliente" onClick={HandleAddClient} />
          <ButtonComponent title="Cerrar Sesión" onClick={handleDelete} />
        </ContainerButtons>
        <ModalComponent title={title} clientSelected={clientSelected} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      </ContainerScrollView>
    </Container>
  );
}

export default Clients;
