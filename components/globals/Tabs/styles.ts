import { ITheme } from "@/types/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ITheme) =>
  StyleSheet.create({
    tabs: {
      height: "auto",
      backgroundColor: theme.colors.background,
    },
    wrapper: {
      padding: 10,
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    row: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      gap: 10,
    },
  });
