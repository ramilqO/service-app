import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { styles } from "./styles";
import { themes } from '@/utils/themes';
import useTheme from '@/hooks/useTheme';

const Tabs = () => {
    const theme = useTheme() ?? useColorScheme();
    const themedStyles = styles(themes[theme]);

    return (
        <View style={themedStyles.tabs}>
            <View style={themedStyles.wrapper}></View>
        </View>
    );
}

export default Tabs;
