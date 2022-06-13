import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import api from '../../Services/api';

import { propsStack } from '../../Routes/Stack/Models';

interface PerfilDataType {
	route: {
		params: {
			username: string;
		}
	}
}

export default function Perfil(data: PerfilDataType) {
	// const [nome, setNameCadastro] = useState(String);
	// const [dataNascimento, setDataNascimento] = useState(String);
	// const [id, setId] = useState(Number);
	// const [nacionalidade, setNacionalidade] = useState(String);

	const [user, setUser] = useState({
		data: {
			'id': 0,
			'name': '',
			'password': '',
			'role': '',
			'birthday': '',
			'address': '',
			'CPF': '',
			'phone': '',
			'email': '',
			'status': '',
			'created_at': '',
			'updated_at': '',
			'deleted_at': '',
			'nationality': ''
		}
	});		

	const getUser = async () => {
		const user = await api.get(`/user/${data.route.params.username}`);
		console.log(user.data);
		setUser(user.data);
	}

	useEffect(() => {
		getUser();
	}, []);

	const navigation = useNavigation<propsStack>();

	return (
		<View style={styles.container}>
			<Text style={{
				fontSize: 20,
				fontWeight: 'bold',
				marginBottom: 20,
			}}>
				Dados do Perfil
			</Text>

			{ user.data.id == 0 ? <Text>Carregando...</Text> : (
				<View>
					<Text>
						Bem-Vindo {user.data.name}!
					</Text>
					<Text>
						Nome: {user.data.name}
					</Text>
					<Text>
						Tipo de Usuário: {user.data.role}
					</Text>
					<Text>
						Data de nascimento: {user.data.birthday}
					</Text>
					<Text>
						Matrícula: {user.data.id}
					</Text>
					<Text>
						Nacionalidade: {user.data.nationality}
					</Text>

					<Pressable style={styles.buttonStyle} onPress={navigation.goBack}>
						<Text style={styles.buttonTextStyle}>Voltar</Text>
					</Pressable>
				</View>
			)}
			
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
