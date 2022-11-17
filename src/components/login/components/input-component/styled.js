import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const ContainerComponent = styled.View`
  margin-top: 10px;
  height: 35px;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: #20B2AA;
  border-radius: 25px;  
  padding: 10px;
  width: 100%;
`;

const Input = styled.TextInput`
  color: #20B2AA; 
  border: 0;
  outline: none;
  width: 75%;
`;

const ContainerIcon = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -1px;
  height: 35px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: #20B2AA;
  width: 25%;
`;

const Icon = styled.Image`
  width: 12px;
  height: 12px; 
`;


export {
  ContainerComponent,
  ContainerIcon,
  Input,
  Icon
};