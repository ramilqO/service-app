import useTheme from '@/hooks/useTheme';
import React, { FC, useEffect, useRef } from 'react';
import { View, Text, Animated, Dimensions, Linking } from 'react-native';
import { styles } from './styles';
import { themes } from '@/utils/themes';
import Button from '@/components/ui/Button';

const { height } = Dimensions.get('window');

interface IBottomModal {
    time: string;
    data: string;
    distance: string;
}

const BottomModal: FC<IBottomModal> = ({ time, data, distance }) => {
    const theme = useTheme();
    const themedStyles = styles(themes[theme]);

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(height)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(translateY, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();
    }, [fadeAnim, translateY]);

    const handlePhonePress = () => {
        const phoneNumber = `tel:79081149697`;
        Linking.openURL(phoneNumber).catch(err => console.error('Error opening phone app:', err));
    };

    return (
        <Animated.View style={[
            themedStyles.modal,
            { opacity: fadeAnim, transform: [{ translateY }] }
        ]}>
            <View style={themedStyles.wrapper}>
                <Text style={themedStyles.header}>{data}, {time}</Text>

                <View style={themedStyles.line}></View>

                <View style={themedStyles.flex}>
                    <Text style={themedStyles.body}>Продолжительность</Text>
                    <Text style={themedStyles.body}>4 мин</Text>
                </View>
                <View style={themedStyles.flex}>
                    <Text style={themedStyles.body}>Расстояние</Text>
                    <Text style={themedStyles.body}>{distance}</Text>
                </View>
                <View style={themedStyles.flex}>
                    <Text style={themedStyles.body}>Средняя скорость</Text>
                    <Text style={themedStyles.body}>15, 21 км/ч</Text>
                </View>

                <View style={[themedStyles.flex, { marginTop: 25, gap: 10 }]}>
                    <Button title='Написать' onPress={handlePhonePress} />
                    <Button title='Позвонить' variant='filled' onPress={handlePhonePress} />
                </View>
            </View>
        </Animated.View>
    );
}

export default BottomModal;