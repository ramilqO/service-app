import React, { createContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { themes } from '@/utils/themes';
import { useColorScheme } from 'react-native';

// Контекст для текущей темы
export const ThemeContext = createContext<keyof typeof themes>('dark');
// Контекст для изменения темы
export const SetterContext = createContext<React.Dispatch<React.SetStateAction<keyof typeof themes>> | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const systemTheme = useColorScheme();
    const [theme, setTheme] = useState<keyof typeof themes>(systemTheme || 'dark');

    useEffect(() => {
        const loadTheme = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem('@user_theme');
                if (savedTheme) {
                    setTheme(savedTheme as keyof typeof themes);
                } else if (systemTheme) {
                    setTheme(systemTheme);
                }
            } catch (error) {
                console.error('Error loading theme:', error);
            }
        };

        loadTheme();
    }, [systemTheme]);

    return (
        <ThemeContext.Provider value={theme}>
            <SetterContext.Provider value={setTheme}>
                {children}
            </SetterContext.Provider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;