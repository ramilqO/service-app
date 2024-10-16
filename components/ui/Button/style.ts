import { ITheme } from "@/types/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ITheme) =>
  StyleSheet.create({
    button: {
      borderRadius: 5,
      paddingVertical: 10,
      flex: 1,
    },
    outlined: {
      borderWidth: 2,
      borderColor: theme.colors.primary,
      backgroundColor: "transparent",
    },
    filled: {
      backgroundColor: theme.colors.primary,
    },
    buttonText: {
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeight: 400,
      textAlign: "center",
    },
    outlinedText: {
      color: theme.colors.primary,
    },
    filledText: {
      color: "#FFFFFF",
    },
  });
