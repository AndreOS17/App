import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Pacote() {
  const [name, setNamePacote] =           useState(String);
  const [descricao, setDescricao] =     useState(String);
  const [destino, setDestino] =             useState(String);
  const [valor, setValor] =       useState(Number);
  const [dataInicio, setDataInicio] =       useState(Date);
  const [dataFim, setDataFim] =       useState(Date);

  class pacote {
    static nome: string;
    static desc: string;
    static destino: string;
    static valor: number;
    static dataInicio: Date;
    static dataFim: Date;      
  }

  return (
    <View style={styles.container}>
      <Text style={{ 
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
      }}>
        Cadastro de Pacote
      </Text>
      <View>
      <TextInput onChangeText={(e)=>{setNamePacote(e)}}  placeholder='Nome do pacote'
      style={styles.inputStyle}
      ></TextInput>
      <TextInput onChangeText={(e)=>{setDescricao(e)}}  placeholder='Descricao do Pacote'
      style={styles.inputStyle}
      ></TextInput>
      <TextInput onChangeText={(e)=>{setDestino(e)}}  placeholder='Destino'
      style={styles.inputStyle}
      ></TextInput>
      <TextInput onChangeText={(e)=>{setValor(e)}}  placeholder='Preço do pacote'
      style={styles.inputStyle}
      ></TextInput>
      <TextInput onChangeText={(e)=>{setDataInicio(e)}}  placeholder='Data de Início da Viagem'
      style={styles.inputStyle}
      ></TextInput>
      <TextInput onChangeText={(e)=>{setDataFim(e)}}  placeholder='Data de Finalização da Viagem'
      style={styles.inputStyle}
      ></TextInput>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>Cadastrar Pacote</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>Cancelar Cadastro de Pacote</Text>
      </TouchableOpacity>
      </View>
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
