import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import { propsStack } from '../../Routes/Stack/Models';

// const login = useNavigation<propsStack>();
// login.navigate('Login');

// const pacote = useNavigation<propsStack>();
// pacote.navigate('Pacote');

// const perfil = useNavigation<propsStack>();
// perfil.navigate('Perfil');


export default function Menu() {
  return (
    <View>
      <View/>
      <Text>Dados</Text>
      <Text>
        Meus dados cadastrais
      </Text>
      {/* <TouchableOpacity style={styles.buttonStyle} onPress={() => perfil.navigate("Perfil")}>
          <Text style={styles.buttonTextStyle}>Acessar Dados</Text>
        </TouchableOpacity>
      <Text>Pacotes</Text>
      <Text>
        Veja os pacotes disponíveis!
      </Text>
      <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Ver pacotes</Text>
        </TouchableOpacity>
      <Text>Logout</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => login.navigate("Login")}>
          <Text style={styles.buttonTextStyle}>Sair da conta</Text>
        </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
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