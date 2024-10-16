import { useContext } from "react";
import { SetterContext } from "../providers/ThemeProvider";

const useThemeUpdate = () => {
  const setter = useContext(SetterContext);

  if (!setter) {
    throw new Error("useThemeUpdate must be used within a ThemeProvider");
  }

  return setter;
};

export default useThemeUpdate;
