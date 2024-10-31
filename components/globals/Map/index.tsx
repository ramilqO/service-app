// UserLocationMap.js
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

const Map = () => {
    const [region, setRegion] = useState({
        latitude: 37.7,
        longitude: -122.4,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421
    });
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        (async () => {
            // Запрашиваем разрешение на доступ к местоположению
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permission to access location was denied');
                return;
            }

            // Получаем текущее местоположение
            let loc = await Location.getCurrentPositionAsync({});
            console.log(loc);
            setRegion({
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude,
                latitudeDelta: 0.0522,
                longitudeDelta: 0.0421
            });
        })();
    }, []);

    return (
        <>
            {error ? (
                <Text>{error}</Text>
            ) : (
                <MapView
                    style={{ width: '100%', height: "100%" }}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation
                    region={region} // Устанавливаем регион карты на текущее местоположение
                    onRegionChangeComplete={setRegion} // Обновляем регион при изменении
                />
            )}
        </>
    );
};

export default Map;