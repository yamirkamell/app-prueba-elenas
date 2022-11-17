import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Modal } from "react-native";
import ButtonComponent from "../../../../commons/components/button-component";
import { ADD_CLIENT, SET_CLIENT } from "../../../../graphql/clients/mutations";
import { GET_CLIENTS } from "../../../../graphql/clients/queries";
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
  const [addClient] = useMutation(ADD_CLIENT, {
    refetchQueries: [{query: GET_CLIENTS}]
  });
  const [setClient] = useMutation(SET_CLIENT);
  const {title, clientSelected, modalVisible, setModalVisible} = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cedula, setCedula] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");

  const onPressSaveClient = () => {
    addClient({ variables: { firstName, lastName, cedula, cellphone, address:{streetAddress} }})
    setFirstName("");
    setLastName("");
    setCedula("");
    setCellphone("");
    setStreetAddress("");
    setModalVisible(!modalVisible);
  }

  const onPressEditClient = () => {
    setClient({ variables: { id: clientSelected, firstName, lastName, address:{streetAddress} }})
    setFirstName("");
    setLastName("");
    setCedula("");
    setCellphone("");
    setStreetAddress("");
    setModalVisible(!modalVisible);
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
              <TextComponent>Dirección</TextComponent>
              <InputComponent value={streetAddress} onChangeText={setStreetAddress} />
            </ContainerBody>
            <ContainerButtons>
              <ButtonComponent title={clientSelected == 0 ? "Guardar" : "Editar"} onClick={clientSelected == 0 ?  onPressSaveClient : onPressEditClient}/>
            </ContainerButtons>
          </ContainerModal>
        </ContainerOverlay>
      </Modal>
    </ContainerOverlay>
  );
};

export default ModalComponent;