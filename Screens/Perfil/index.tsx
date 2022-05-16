import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Perfil() {
  const [nome, setNameCadastro] = useState(String);
  const [dataNascimento, setDataNascimento] = useState(String);
  const [id, setId] = useState(Number);
  const [nacionalidade, setNacionalidade] = useState(String);



  // Class -> Interface
  class user {
    static nome: string;
    static dataNascimento: string;
    static id: number;
    static nac: string;      
  }


  return (
    <View style={styles.container}>
      <Text style={{ 
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
      }}>
        Dados do Perfil
      </Text>
      
      <Text>
        Seja bem vindo {nome}
        style={styles.textStyle}
      </Text>

      <Text>
        Nome: {nome}
        style={styles.textStyle}
        </Text>

      <Text>
        Data de nascimento: {dataNascimento}
        style={styles.textStyle}
        </Text>

      <Text>
        Matrícula: {id}
        style={styles.textStyle}
        </Text>

      <Text>
        Nacionalidade: {nacionalidade}
        style={styles.textStyle}
        </Text>

        <TouchableOpacity  style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>Voltar</Text>
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
