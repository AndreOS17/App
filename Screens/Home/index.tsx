import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

import { propsStack } from '../../Routes/Stack/Models';

interface HomeDataType {
	route: {
		params: {
			user: {
				username: string;
				password: string;
			};
		};
	};
}

var i = 0;

export default function Home(data: HomeDataType) {

	const TuristaPNG = require('./Images/icons8-pasta-96.png');
	const GuiaPNG = require('./Images/icons8-bandeira-de-chegada-96.png');
	// const navigation = useNavigation<propsStack>();

	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);

	const username = data.route.params.user.username
	const password = data.route.params.user.password

	useEffect(() => {
		(async () => {
			const { status } = await Location.requestBackgroundPermissionsAsync();
			if (status !== 'granted') {
				Alert.alert('Permissão de localização', 'Não foi possível obter a permissão de localização');
				const loc = await Location.getCurrentPositionAsync({});
				setLatitude(loc.coords.latitude);
				setLongitude(loc.coords.longitude);
			}
		})();
	}, []);

	const { width, height } = Dimensions.get('window');
	const ASPECT_RATIO = width / height;
	const LATITUDE = latitude;
	const LONGITUDE = longitude;
	const LATITUDE_DELTA = 0.005;
	const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

	const [mapRegion, setMapRegion] = useState({
		latitude: LATITUDE,
		longitude: LONGITUDE,
		latitudeDelta: LATITUDE_DELTA,
		longitudeDelta: LONGITUDE_DELTA,
	});

	const getLocation = async () => {
		const loc = await Location.getCurrentPositionAsync({});
		setLatitude(loc.coords.latitude);
		setLongitude(loc.coords.longitude);
		setMapRegion({
			latitude: LATITUDE,
			longitude: LONGITUDE,
			latitudeDelta: LATITUDE_DELTA,
			longitudeDelta: LONGITUDE_DELTA,
		});
	};

	const [newLatitude, setNewLatitude] = useState(0);
	const [newLongitude, setNewLongitude] = useState(0);

	const getCoordinates = async () => {
		const loc = await Location.getCurrentPositionAsync({});
		setNewLatitude(loc.coords.latitude);
		setNewLongitude(loc.coords.longitude);
	}

	// setInterval(() => getCoordinates(), 1000);

	const navigation = useNavigation<propsStack>();

	return (
		<View style={styles.container}>

			{/* Título */}
			<Text style={{
				fontSize: 20,
				fontWeight: 'bold',
				marginBottom: 20,
				marginTop: -50,
			}}>
				Home
			</Text>

			<Text style={{
				fontSize: 15,
				fontWeight: 'bold',
			}}>{username}</Text>
			<Text style={{
				fontSize: 15,
				fontWeight: 'bold',
				marginBottom: 20,
			}}>{password}</Text>

			{/* Mostrar Localização */}
			<Pressable onPress={getLocation}>
				<Text>Atualizar Localização</Text>
			</Pressable>

			{/* Mapa */}
			<MapView
				style={styles.mapStyle}
				region={mapRegion}
			>
				<Marker
					coordinate={{
						latitude: LATITUDE - 0.001,
						longitude: LONGITUDE,
					}}
					title="Turista"
					icon={TuristaPNG}
				/>

				<Marker
					coordinate={{
						latitude: LATITUDE + 0.001,
						longitude: LONGITUDE,
					}}
					title="Guia"
					icon={GuiaPNG}
				/>

				<Marker
					coordinate={{
						latitude: LATITUDE,
						longitude: LONGITUDE,
					}}
					title="Loc1"
					pinColor={'red'}
				/>

				<Marker
					coordinate={{
						latitude: LATITUDE,
						longitude: LONGITUDE + 0.001,
					}}
					title="Loc2"
					pinColor={'red'}
				/>

				<Marker
					coordinate={{
						latitude: LATITUDE,
						longitude: LONGITUDE - 0.001,
					}}
					title="Loc3"
					pinColor={'red'}
				/>

				<Marker
					coordinate={{
						latitude: LATITUDE + 0.001,
						longitude: LONGITUDE + 0.001,
					}}
					title="Extra"
					pinColor={'wheat'}
					draggable={true}
				/>

			</MapView>

			{/* Região "Pós-Mapa" */}
			
			{/* Botão "Perfil" */}
			<Pressable onPress={() => navigation.navigate('Perfil', { username })}
			style={{
				padding: 10,
				backgroundColor: '#0fb9ff',
				alignItems: 'center',
				borderRadius: 10,
				width: '30%',
				marginTop: 20
			}}>
				<Text style={{
					color: '#fff',
					fontSize: 10,
					fontWeight: 'bold',
				}}>
					Perfil
				</Text>
			</Pressable>
		</View>
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

	mapStyle: {
		height: '40%',
		width: '80%',
		alignSelf: 'center',
	},
});