import { StyleSheet } from "react-native";
import { ITheme } from "@/types/themes";

export const styles = (theme: ITheme) =>
  StyleSheet.create({
    item: {
      backgroundColor: theme.colors.background,
      borderBottomColor: "#E2E2E2",
      borderBottomWidth: 1,
    },
    wrapper: {
      padding: 15,
      display: "flex",
      flexDirection: "column",
      gap: 5,
    },
    name: {
      fontSize: theme.fonts.size.heading,
      // fontWeight: theme.fonts.weight,
      color: theme.colors.default,
    },
    profession: {
      fontSize: theme.fonts.size.body,
      // fontWeight: theme.fonts.weight,
      color: "#828282",
    },
    phone: {
      color: theme.colors.primary,
      // fontWeight: theme.fonts.weight,
      fontSize: theme.fonts.size.body,
    },
    phoneWrap: {
      width: "35%",
    },
  });
