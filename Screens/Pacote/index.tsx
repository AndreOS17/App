import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Pacote() {
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

  class pacote {
    static nome: string;
    static desc: string;
    static destino: string;
    static preco: number;      
  }

  return (
    <View style={styles.container}>
      <View>
      <Text>Nome {pacote.nome}</Text>
      <Text>Descrição {pacote.desc}</Text>
      <Text>Destino {pacote.destino}</Text>
      <Text>Preço {pacote.preco}</Text>
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
});
