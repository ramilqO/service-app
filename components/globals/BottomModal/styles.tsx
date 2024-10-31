import { ITheme } from "@/types/themes";
import { StyleSheet } from "react-native";

export const styles = (theme: ITheme) => StyleSheet.create({
    modal: {
        position: 'absolute',
        bottom: 0,

        width: '100%',
        height: '40%',

        backgroundColor: theme.colors.background,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },

    wrapper: {
        padding: 15,

        flexDirection: 'column',
        gap: 15,
        color: theme.colors.default,
    },

    header: {
        fontSize: 18,
        color: theme.colors.default,
    },

    body: {
        fontSize: 16,
        color: theme.colors.default,
    },

    line: {
        width: '100%',
        height: 2,
        backgroundColor: '#DADADA',
    },

    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})