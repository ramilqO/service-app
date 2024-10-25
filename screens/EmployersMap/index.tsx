import Layout from '@/components/globals/Layout';
import Tabs from '@/components/globals/Tabs';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import YaMap from 'react-native-yamap';

// YaMap.init('7fe08882-ac42-41a4-b202-21934b7b4f3a');


const EmployersMap = () => {
    return (
        <Layout>
            <Tabs />
            <Text>EmployersMap</Text>
            {/* <YaMap
                userLocationIcon={{ uri: 'https://www.clipartmax.com/png/middle/180-1801760_pin-png.png' }}
                initialRegion={{
                    lat: 50,
                    lon: 50,
                    zoom: 10,
                    azimuth: 80,
                    tilt: 100
                }}
                style={{ flex: 1, width: 100, height: 100 }}
            /> */}
        </Layout>
    );
}

export default EmployersMap;
