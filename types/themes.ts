interface IColors {
  default: string;
  background: string;
  primary: string;
  secondary: string;
}

type TFontWeight =
  | "light"
  | "normal"
  | "bold"
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | "ultralight"
  | "thin"
  | "medium";

interface IFonts {
  size: {
    body: number;
    heading: number;
  };
  weight: TFontWeight;
}

export interface ITheme {
  colors: IColors;
  fonts: IFonts;
}
