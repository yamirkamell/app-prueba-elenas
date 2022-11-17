import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const ContainerScrollView = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  height: 100%; 
`;

const ContainerHeader = styled.View`
  align-self: flex-start;
  margin: 20px;
`;

const TitleComponent = styled.Text`
  font-size: 24px;
  color: #20B2AA;
`;

const ContainerClient = styled.View`
  flex-direction: row; 
  justify-content: space-around; 
  align-items: center;
  background-color: #fff;
  width: 95%;
  height: 70px; 
  border-radius: 20px;
  border-width: 1px;
  border-color: #20B2AA;
  padding: 20px;
  margin-top: 10px;
`;

const ContainerButtons = styled.View`
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

export {
  Container,
  ContainerScrollView,
  ContainerHeader,
  TitleComponent,
  ContainerClient,
  ContainerButtons
}