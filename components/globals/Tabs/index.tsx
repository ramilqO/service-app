import React from 'react';
import { View, Text } from 'react-native';
import { styles } from "./styles";
import { themes } from '@/utils/themes';
import useTheme from '@/hooks/useTheme';
import Button from '@/components/ui/Button';
import SettingsIcon from '@/assets/icons/settings';
import { useLocation } from 'react-router-native';

const Tabs = () => {
    const theme = useTheme();
    const themedStyles = styles(themes[theme]);

    const location = useLocation();

    return (
        <View style={themedStyles.tabs}>
            <View style={themedStyles.wrapper}>
                <View style={themedStyles.row}>
                    <Button title='Список' outlined={location.pathname !== "/"} />
                    <Button title='Карта' outlined={location.pathname !== "/map"} />
                    <SettingsIcon width={36} height={36} />
                </View>
                <Button title="Фильтр" outlined/>
                <Text>sads</Text>
            </View>
        </View>
    );
}

export default Tabs;
