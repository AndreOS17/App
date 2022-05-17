// import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

// import { propsStack } from '../../Routes/Stack/Models';

export default function Home() {
  // const navigation = useNavigation<propsStack>();

	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);

	useEffect(() => {
		(async () => {
			const { status } = await Location.requestBackgroundPermissionsAsync();
			if (status !== 'granted') {
				Alert.alert('Permissão de localização', 'Não foi possível obter a permissão de localização');
			}
			const loc = await Location.getCurrentPositionAsync({});
			setLatitude(loc.coords.latitude);
			setLongitude(loc.coords.longitude);
		})();
	}, []);

	const getLocation = async () => {
		const loc = await Location.getCurrentPositionAsync({});
		setLatitude(loc.coords.latitude);
		setLongitude(loc.coords.longitude);
		setMapRegion({
			latitude:latitude,
			longitude:longitude,
			latitudeDelta:LATITUDE_DELTA,
			longitudeDelta:LONGITUDE_DELTA,
		});
	};

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

  return (
    <View style={styles.container}>

      {/* Título */}
      {/* <Text style={{ 
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: -50,
      }}>
        Home
      </Text> */}
			
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
						latitude: LATITUDE,
						longitude: LONGITUDE,
					}}
					title="Localização Atual"
				/>
			</MapView>
    </View>
  );
}

const primaryColor_Light = '#fff';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor_Light ,
    alignItems: 'center',
    justifyContent: 'center',
  },

	mapStyle: {
		height: '40%',
		width: '80%',
		alignSelf: 'center',
	},
});