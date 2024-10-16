import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from "./style";
import useTheme from '@/hooks/useTheme';
import { themes } from '@/utils/themes';

interface IButton {
    title: string;
    onPress?: () => void;
    outlined?: boolean;
    props?: any;    // TODO: избавиться от any
};

const Button: FC<IButton> = ({ title, onPress, outlined }) => {
    const theme = useTheme();
    const themedStyles = styles(themes[theme]);

    return (
        <TouchableOpacity
            style={[themedStyles.button, outlined ? themedStyles.outlined : themedStyles.filled]}
            onPress={onPress}
        >
            <Text style={[themedStyles.buttonText, outlined ? themedStyles.outlinedText : themedStyles.filledText]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;