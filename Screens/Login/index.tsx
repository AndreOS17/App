import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Image, Alert, KeyboardAvoidingView, Pressable } from 'react-native';

import { propsStack } from '../../Routes/Stack/Models';

import api from '../../Services/api';

export default function Login() {
	const [username, setUsername] = useState(String);
	const [password, setPassword] = useState(String);

	const [modalVisible, setModalVisible] = useState(false);
	const [modalText, setModalText] = useState(String);

	const navigation = useNavigation<propsStack>();

	const login = async () => {
		try {
			const response = await api.post('login', { username, password });
			console.log(response.data);
			navigation.navigate('Home', { user: { username, password } });
			setUsername('');
			setPassword('');
			// Criar Alert Customizado [ ]
			Alert.alert('Login', 'Login realizado com sucesso', [{ text: 'OK' }], { cancelable: false });
		} catch (err) {
			console.log(err);
			Alert.alert('Login', 'Usuário ou senha incorretos', [{ text: 'OK' }], { cancelable: false });
		}
	}

	const logo = require('./Images/logo.png');

	return (
		<KeyboardAvoidingView style={styles.container} behavior='height'>
			{/* Imagem -> Logo () */}
			<Image source={logo} style={{ width: 250, height: 250, marginBottom: 20 }} />

			{/* Título */}
			<Text style={{
				fontSize: 20,
				fontWeight: 'bold',
				marginBottom: 20,
				marginTop: -50,
			}}>
				Login
			</Text>

			{/* Campos Login */}
			<TextInput onChangeText={(e) => { setUsername(e) }} placeholder=' Usuário'
				style={styles.inputStyle}
				value={username}
			></TextInput>
			<TextInput onChangeText={(e) => { setPassword(e) }} placeholder=' Senha'
				style={styles.inputStyle}
				value={password}
				secureTextEntry={true}
			></TextInput>

			{/* Botões */}
			<Pressable onPress={login}
				style={({ pressed }) =>
					pressed ? styles.buttonStylePressed : styles.buttonStyle
				}>
				<Text style={styles.buttonTextStyle}>Logar</Text>
			</Pressable>

			<Text style={{ marginBottom: 10, marginTop: 10, color: '#afafaf' }} >ou</Text>

			<Pressable onPress={() => navigation.navigate('Cadastro')} style={styles.buttonStyle}>
				<Text style={styles.buttonTextStyle} >Cadastrar</Text>
			</Pressable>
		</KeyboardAvoidingView>
	);
}

const primaryColor_Light = '#fff';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: primaryColor_Light,
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
		marginBottom: 20,
	},

	buttonStyle: {
		padding: 10,
		backgroundColor: '#0fb9ff',
		alignItems: 'center',
		borderRadius: 10,
		width: '30%',
	},

	buttonStylePressed: {
		padding: 10,
		backgroundColor: '#0fdddd',
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