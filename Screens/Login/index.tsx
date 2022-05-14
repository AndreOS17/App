import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import { propsStack } from '../../Routes/Stack/Models';

export default function Login() {
  const [username, setUsername] = useState(String);
  const [password, setPassword] = useState(String);

  const navigation = useNavigation<propsStack>();

  const login = () => {
    // Chamada API (POST -> username, password)
    console.log(username, password, 'login');
  }

  return (
    <View style={styles.container}>
      {/* Imagem -> Logo */}
      {/* <Image></Image> */}
      <Text>Hello!</Text>

      <TextInput onChangeText={(e)=>{setUsername(e)}} placeholder='Usuário'></TextInput>
      <TextInput onChangeText={(e)=>{setPassword(e)}} placeholder='Senha' keyboardType='numeric'></TextInput>
      <Button title="Login" onPress={login} ></Button>
      <Button title="Cadastro" onPress={ ()=>navigation.navigate('Cadastro') } ></Button>
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