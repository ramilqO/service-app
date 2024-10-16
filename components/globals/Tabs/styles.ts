import { ITheme } from "@/types/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ITheme) =>
  StyleSheet.create({
    tabs: {
      backgroundColor: theme.colors.background,
    },
    wrapper: {
      padding: 10,
    },
  });
