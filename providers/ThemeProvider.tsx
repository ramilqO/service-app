import React, { createContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'react-native';
import { themes } from '@/utils/themes';

export const ThemeContext = createContext<keyof typeof themes>('dark'); // Контекст для текущей темы
export const SetterContext = createContext<React.Dispatch<React.SetStateAction<keyof typeof themes>> | null>(null); // Контекст для изменения темы

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const systemTheme = useColorScheme();
    const [theme, setTheme] = useState<keyof typeof themes>(systemTheme || 'light');

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