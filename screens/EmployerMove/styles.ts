import { ITheme } from "@/types/themes";
import { StyleSheet } from "react-native";

export const styles = (theme: ITheme) =>
  StyleSheet.create({
    section: {
      padding: 15,
      backgroundColor: theme.colors.background,
      borderColor: "#DADADA",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },
    sectionHeader: {
      color: theme.colors.default,
      fontSize: theme.fonts.size.heading,
    },
    item: {
      backgroundColor: "#F5F5F5",
    },
    itemWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10,
      paddingHorizontal: 15,
    },
    time: {
      color: theme.colors.primary,
      fontSize: theme.fonts.size.heading,
    },
    distance: {
      color: "#828282",
      fontSize: theme.fonts.size.body,
    },
  });
