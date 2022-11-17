/*import React, { useEffect, useState } from 'react';
import {
  ContainerOverlay,
  ContainerWrapper,
  ContainerModal,
  ContainerHeader,
  TitleComponent,
  CloseButtonComponent,
  ContainerBody,
  TextComponent,
  InputComponent,
  ContainerFooter,
  ButtonSaveComponent,
} from './styled';

const ModalComponent = ({ isShowing, hide, title, id, userSelected }) => {

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [perfil, setPerfil] = useState("");
  const [activeButton, setActiveButton] = useState(true);

  useEffect(() => {
    if (username !== "" && name !== "" && email !== "" && perfil !== "") {
      setActiveButton(false);
    }
  }, [userSelected, username, name, email, perfil]);

  /*const onPressSaveUser = () => {
    dispatch(saveUser({
      username: username,
      name: name,
      email: email,
      perfil: perfil,
    }));
    setUsername("");
    setName("");
    setEmail("");
    setPerfil("");
    hide();
  }

  const onPressEditUser = () => {
    dispatch(editUser({
      id: userSelected,
      username: username,
      name: name,
      email: email,
      perfil: perfil,
    }));
    setUsername("");
    setName("");
    setEmail("");
    setPerfil("");
    hide();
  }

  return isShowing ? (
    <>
      <ContainerOverlay />
      <ContainerWrapper>
        <ContainerModal>
          <ContainerHeader>
            <TitleComponent>{title}</TitleComponent>
            <CloseButtonComponent onPress={hide}>
              {"X"}
            </CloseButtonComponent>
          </ContainerHeader>

              <ContainerBody>
                <TextComponent>Nombre de usuario</TextComponent>
                <InputComponent value={userSelected === 0 ? username : username} onChangeText={setUsername} />
                <TextComponent>Nombre</TextComponent>
                <InputComponent value={userSelected === 0 ? name : name} onChangeText={setName} />
                <TextComponent>Correo Electronico</TextComponent>
                <InputComponent value={userSelected === 0 ? email : email} onChangeText={setEmail} />
                <TextComponent>Perfil</TextComponent>
                <InputComponent value={userSelected === 0 ? perfil : perfil} onChangeText={setPerfil} />
              </ContainerBody>
              <ContainerFooter>
                <ButtonSaveComponent disabled={activeButton} onPress={() => { title === 'Agregar usuario' ? "onPressSaveUser()" : "onPressEditUser()" }}> Guardar</ButtonSaveComponent>
              </ContainerFooter>

        </ContainerModal>
      </ContainerWrapper>
    </>
  ) : null

}


export default ModalComponent;*/


import React, { useState } from "react";
import { Modal } from "react-native";
import ButtonComponent from "../../../../commons/components/button-component";
import { 
  ContainerOverlay, 
  ContainerModal, 
  ContainerBody, 
  ContainerHeader, 
  InputComponent, 
  TextComponent, 
  TitleComponent, 
  ContainerButtons,
  ButtonClose 
} from "./styled";

const ModalComponent = (props) => {
  const {title, clientSelected, modalVisible, setModalVisible} = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cedula, setCedula] = useState("");
  const [cellphone, setCellphone] = useState("");

  const HandleSave = () => {
    setModalVisible(!modalVisible);
    console.log(clientSelected);
  }

  return (
    <ContainerOverlay>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ContainerOverlay>
          <ContainerModal>
            <ContainerHeader>
              <TitleComponent>{title}</TitleComponent>
              <ButtonClose onPress={() => setModalVisible(!modalVisible)}>
                <TitleComponent>X</TitleComponent>
              </ButtonClose>
            </ContainerHeader>
            <ContainerBody>
              <TextComponent>Nombre</TextComponent>
              <InputComponent value={firstName} onChangeText={setFirstName} />
              <TextComponent>Apellido</TextComponent>
              <InputComponent value={lastName} onChangeText={setLastName} />
              <TextComponent>Número de documento</TextComponent>
              <InputComponent value={cedula} onChangeText={setCedula} />
              <TextComponent>Número de celular</TextComponent>
              <InputComponent value={cellphone} onChangeText={setCellphone} />
            </ContainerBody>
            <ContainerButtons>
              <ButtonComponent title="Guardar" onClick={HandleSave}/>
            </ContainerButtons>
          </ContainerModal>
        </ContainerOverlay>
      </Modal>
    </ContainerOverlay>
  );
};

export default ModalComponent;