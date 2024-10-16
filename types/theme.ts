interface Colors {
  background: string; // Цвет фона
  primary: string; // Основной цвет
  secondary: string; // Вторичный цвет
}

interface Fonts {
  body: string; // Шрифт для текста тела
  heading: string; // Шрифт для заголовков
  size: {
    body: string; // Размер шрифта для текста тела
    heading: string; // Размер шрифта для заголовков
  };
}

export interface ITheme {
  colors: Colors; // Цвета темы
  fonts: Fonts; // Шрифты темы
}
