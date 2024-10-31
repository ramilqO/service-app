import React from 'react';
import { View, Text } from 'react-native';
import Map from "@/components/globals/Map";
import { useRoute } from '@react-navigation/native';
import BottomModal from '@/components/globals/BottomModal';

const Employer = () => {
    const route = useRoute();

    return (
        <View>
            <Map />
            <BottomModal time={route.params?.time} data={'14 октября'} distance={route.params?.distance} />
        </View>
    );
}

export default Employer;
