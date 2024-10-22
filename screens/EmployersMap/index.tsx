import React from 'react';
import { View, Text } from 'react-native';

const EmployersMap = ({ navigation, route }) => {
    return (
        <View>
            <Text>EmployersMap: {route.params.name}</Text>
        </View>
    );
}

export default EmployersMap;
