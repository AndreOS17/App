import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Perfil() {
  const [username, setUsername] = useState(String);
  const [password, setPassword] = useState(String);

  const login = () => {
    // Chamada API (POST -> username, password)
    console.log(username, password, 'login');
  }

  const register = () => {
    // Carregar Tela de Cadastro [ ]
    console.log(username, password, 'register');
  }

  // Class -> Interface
  class user {
    static nome: string;
    static dataNasc: string;
    static id: number;
    static nac: string;      
  }


  return (
    <View style={styles.container}>
      {/* Imagem -> Logo */}
      {/* <Image></Image> */}
      <Text>Seja bem vindo {username}</Text>

      <Text>Nome: {user.nome}</Text>

      <Text>Data de nascimento: {user.dataNasc}</Text>

      <Text>Matrícula: {user.id}</Text>

      <Text>Nacionalidade: {user.nac}</Text>

      <Button title="Editar"></Button>
      
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
