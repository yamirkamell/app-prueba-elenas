import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  width: 95%;
  margin-top: 10px;
  height: 35px;
  border-width: 0px;
  background-color: #20B2AA;
  border-radius: 25px;  
  color: white;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  color: #fff;
`;

export {
  Button,
  StyledText  
};