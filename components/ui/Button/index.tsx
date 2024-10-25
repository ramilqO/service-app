import useTheme from '@/hooks/useTheme';
import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { themes } from '@/utils/themes';
import { useNavigation } from 'expo-router';

interface IButton {
    title: string;
    onPress?: () => void;
    variant?: "outlined" | "filled";
}

const Button: FC<IButton> = ({ title, onPress, variant = 'outlined' }) => {
    const isOutlined = variant === 'outlined';
    const theme = useTheme();
    const themedStyles = styles(themes[theme]);

    return (
        <TouchableOpacity
            style={[themedStyles.button, isOutlined ? themedStyles.outlined : themedStyles.filled]}
            onPress={onPress}
        >
            <Text style={[themedStyles.buttonText, isOutlined ? themedStyles.outlinedText : themedStyles.filledText]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
