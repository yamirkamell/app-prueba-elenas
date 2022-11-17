import { ContainerComponent, ContainerIcon, Icon, Input } from './styled';

const InputComponent = (props) => {
  const { placeholder, img, name, setName } = props;
  return (
    <ContainerComponent>
      <Input placeholder={placeholder} onChangeText={setName} value={name} />
      <ContainerIcon>
        <Icon
          source={img}
        />
      </ContainerIcon>
    </ContainerComponent>
  )
};

export default InputComponent;