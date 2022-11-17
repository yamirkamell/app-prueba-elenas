import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  flex-direction: column; 
  justify-content: space-around; 
  align-items: center;
  background-color: #20B2AA;
  width: 100%;
  height: 100%; 
`;

const BackgroundCenter = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 180px;
  border-top-right-radius: 180px;  
  background: white; 
`
const ContainerBody = styled.View`
  flex: 1; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
`;

const ContainerCenter = styled.View`
  flex: 2; 
  height: 80%; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-evenly; 
  align-items: center;
  position: absolute; 
`;

const ContainerInput = styled.View`
  margin-top: 15px;
`;

const TitleComponent = styled.Text`
  color: #20B2AA;
  font-size: 25px;
  font-weight: bold;
  margin-top: 50px;
  margin-left: -10px;
`;

const LostPassComponent = styled.Text`
  color: #20B2AA;
  font-weight: bold;
  margin-top: 25px;
`;

const ErrorText = styled.Text`
  color: red;  
`;

export {
  Container,
  BackgroundCenter,
  ContainerBody,
  ContainerCenter,
  ContainerInput,
  TitleComponent,
  LostPassComponent,
  ErrorText
}