import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Cadastro() {
  const [name, setName] =           useState(String);
  const [dataNac, setDataNac] =     useState(String);
  const [CPF, setCPF] =             useState(String);
  const [adress, setAdress] =       useState(String);
  const [username, setUsername] =   useState(String);
  const [password, setPassword] =   useState(String);
  const [password2, setPassword2] = useState(String);

  const register = () => {
    // Carregar Tela de Cadastro [ ]
    console.log(name, dataNac, CPF, adress, username, password, password2);
  }

  return (
    <View style={styles.container}>
      <Text>Cadastro</Text>
      <TextInput onChangeText={(e)=>{setUsername(e)}}  placeholder='Nome'></TextInput>
      <TextInput onChangeText={(e)=>{setDataNac(e)}}   placeholder='Data de Nascimento'></TextInput>
      <TextInput onChangeText={(e)=>{setCPF(e)}}       placeholder='CPF'></TextInput>
      <TextInput onChangeText={(e)=>{setAdress(e)}}    placeholder='Endereço'></TextInput>
      <TextInput onChangeText={(e)=>{setUsername(e)}}  placeholder='Nome de usuário'></TextInput>
      <TextInput onChangeText={(e)=>{setPassword(e)}}  placeholder='Nova Senha'></TextInput>
      <TextInput onChangeText={(e)=>{setPassword2(e)}} placeholder='Digite novamente a senha'></TextInput>
      <Button title="Cadastrar" onPress={register} ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
