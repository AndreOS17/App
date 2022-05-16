import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import { propsStack } from '../../Routes/Stack/Models';

import api from '../../Services/api';

export default function Cadastro() {
  const [name, setNameCadastro] =           useState(String);
  const [dataNac, setDataNac] =     useState(String);
  const [CPF, setCPF] =             useState(String);
  const [adress, setAdress] =       useState(String);
  const [username, setUsername] =   useState(String);
  const [password1, setPassword1Cadastro] =   useState(String);
  const [password2, setPassword2Cadastro] = useState(String);

  const navigation = useNavigation<propsStack>();

  const register = async () => {
    if(password1 !== password2) {
      Alert.alert('Erro de Cadastro', 'Senhas não conferem', [{text: 'OK'}], {cancelable: false});
      return;
    } else {
      try {
        const response = await api.post('register', { username: username, password: password1 });
        console.log(response.data);
        navigation.navigate('Login');
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ 
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
      }}>
        Cadastro
      </Text>

      <TextInput onChangeText={(e)=>{setNameCadastro(e)}}      
      placeholder='Nome'
      style={styles.inputStyle}
      ></TextInput>
      <TextInput onChangeText={(e)=>{setDataNac(e)}}   
      placeholder='Data de Nascimento'
      style={styles.inputStyle}
      keyboardType='numbers-and-punctuation'
      ></TextInput>
      <TextInput onChangeText={(e)=>{setCPF(e)}}       
      placeholder='CPF'
      style={styles.inputStyle}
      keyboardType='numbers-and-punctuation'
      ></TextInput>
      <TextInput onChangeText={(e)=>{setAdress(e)}}    
      placeholder='Endereço'
      style={styles.inputStyle}   
      ></TextInput>
      <TextInput onChangeText={(e)=>{setUsername(e)}}  
      placeholder='Nome de usuário'
      style={styles.inputStyle}
      ></TextInput>
      <TextInput onChangeText={(e)=>{setPassword1Cadastro(e)}}  
      placeholder='Nova Senha'
      style={styles.inputStyle} 
      secureTextEntry={true}
      ></TextInput>
      <TextInput onChangeText={(e)=>{setPassword2Cadastro(e)}} 
      placeholder='Digite novamente a senha'
      style={styles.inputStyle}  
      secureTextEntry={true}
      ></TextInput>

      <TouchableOpacity style={styles.buttonStyle} onPress={register}>
        <Text style={styles.buttonTextStyle}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.goBack()}>
        <Text style={styles.buttonTextStyle}>Cancelar Cadastro</Text>
      </TouchableOpacity>
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

  inputStyle: {

    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,

    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,

    width: '60%',
    marginBottom: 10,
  },

  buttonStyle: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#0fb9ff', 
    alignItems: 'center',
    borderRadius: 10,
    width: '30%',
  },
  buttonTextStyle: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  }

});
