import { ITheme } from "@/types/themes";
import { StyleSheet } from "react-native";

export const styles = (theme: ITheme) => StyleSheet.create({
    button: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    outlined: {
        borderWidth: 1,
        borderColor: theme.colors.primary,
        backgroundColor: 'transparent',
    },
    filled: {
        backgroundColor: theme.colors.primary,
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
    },
    outlinedText: {
        color: theme.colors.primary,
    },
    filledText: {
        color: '#fff',
    },
})