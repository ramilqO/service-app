interface Colors {
  background: string; // Цвет фона
  text: string; // Цвет текста
  primary: string; // Основной цвет
  secondary: string; // Вторичный цвет
  accent: string; // Акцентный цвет
  border: string; // Цвет границ
  link: string; // Цвет ссылок
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
