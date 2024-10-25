import Button from '@/components/ui/Button';
import React from 'react';
import { View } from 'react-native';
import { styles } from "./styles";
import useTheme from '@/hooks/useTheme';
import { themes } from '@/utils/themes';
import { useNavigation, useRoute } from '@react-navigation/native';
import Settings from '@/assets/images/settings';

const Tabs = () => {
    const theme = useTheme();
    const themedStyles = styles(themes[theme]);

    const route = useRoute();
    const navigation = useNavigation<any>();

    return (
        <View style={themedStyles.tabs}>
            <View style={themedStyles.container}>
                <View style={themedStyles.group}>
                    <Button title="Список" variant={route.name === '/' ? 'filled' : 'outlined'} onPress={() => navigation.navigate("/")} />
                    <Button title="Карта" variant={route.name === '/map' ? 'filled' : 'outlined'} onPress={() => navigation.navigate("/map")} />
                    <Settings fill={themes[theme].colors.primary} />
                </View>
                <Button title="Фильтры" variant='filled' />
            </View>
        </View>
    );
}

export default Tabs;
