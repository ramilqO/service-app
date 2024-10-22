import { ITheme } from "@/types/themes";

export const themes: Record<string, ITheme> = {
  light: {
    colors: {
      default: 'black',
      background: "#FFF",
      primary: "#306FE3", // Основной цвет
      secondary: "#03DAC6", // Вторичный цвет
    },
    fonts: {
      size: {
        body: 14,
        heading: 16,
      },
      weight: 500,
    },
  },
  dark: {
    colors: {
      default: '#fff',
      background: "#121212", // Темный фон
      primary: "#BB86FC", // Основной цвет
      secondary: "#03DAC6", // Вторичный цвет
    },
    fonts: {
      size: {
        body: 14,
        heading: 16,
      },
      weight: 500,
    },
  },
  vibrant: {
    colors: {
      default: 'black',
      background: "#FFFAF0", // Светлый фон с персиковым оттенком
      primary: "#E74C3C", // Яркий основной цвет (красный)
      secondary: "#3498DB", // Яркий вторичный цвет (синий)
    },
    fonts: {
      size: {
        body: 14,
        heading: 16,
      },
      weight: 500,
    },
  },
};
