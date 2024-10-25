import React, { FC } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useTheme from '@/hooks/useTheme';
import { themes } from '@/utils/themes';
import { styles } from './styles';

interface IEmployerItem {
    id: number;
    name: string;
    profession: string;
    phone: string;
}

const EmployerItem: FC<IEmployerItem> = ({ id, name, profession, phone }) => {
    const navigation = useNavigation<any>(); // TODO: избавиться от any
    const theme = useTheme();
    const themedStyles = styles(themes[theme]);

    const handlePhonePress = () => {
        const phoneNumber = `tel:${phone}`;
        Linking.openURL(phoneNumber).catch(err => console.error('Error opening phone app:', err));
    };

    return (
        <TouchableOpacity onPress={() => navigation.navigate('/move', { title: `Передвижения ${name}`, id })}>
            <View style={themedStyles.item}>
                <View style={themedStyles.wrapper}>
                    <Text style={themedStyles.name}>{name}</Text>
                    <Text style={themedStyles.profession}>{profession}</Text>
                    <View style={themedStyles.phoneWrap}>
                        <TouchableOpacity onPress={handlePhonePress}>
                            <Text style={themedStyles.phone}>{phone}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default EmployerItem;