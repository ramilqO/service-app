import { ITheme } from "@/types/themes";
import { StyleSheet } from "react-native";

export const styles = (theme: ITheme) =>
  StyleSheet.create({
    tabs: {
      backgroundColor: theme.colors.background,
      borderBottomWidth: 1,
      borderBottomColor: "#00000026",
    },
    container: {
      padding: 10,
    },
    group: {
      flexDirection: "row",
      gap: 10,
      marginBottom: 10,
      alignItems: 'center'
    },
  });
