import styled from 'styled-components/native';

const ContainerOverlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

const ContainerModal = styled.View`
  width: 90%;
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 15px;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

const TitleComponent = styled.Text`
  color: #20B2AA;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`;

const TextComponent = styled.Text`
  color: #9B9B9B;
  margin-top: 5px;
`;

const InputComponent = styled.TextInput`
  color: #20B2AA; 
  width:  100%;
  height: 30px;
  border-style: solid;
  border-width: 0.1px;
  border-color: #20B2AA;  
  padding: 0 0 0 3px;
  margin-top: 5px;
  border-radius: 12px;  
`;

const ContainerBody = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const ContainerButtons = styled.View`
  width: 105%;
`;

const ButtonClose = styled.Pressable`
  width: 30px;
`;

export {
  ContainerOverlay,
  ContainerModal,
  ContainerHeader,
  TitleComponent,
  TextComponent,
  InputComponent,
  ContainerBody,
  ContainerButtons,
  ButtonClose
}; 