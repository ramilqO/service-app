import React from 'react';
import { routes } from './routes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useTheme from '@/hooks/useTheme';
import { themes } from '@/utils/themes';

const Stack = createNativeStackNavigator();

const Router = () => {
    const theme = useTheme();   // получаем тему для изменения стилей верхней навигационной панели

    return (
        <NavigationContainer independent>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: themes[theme].colors.primary,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        // fontWeight: 700,
                        fontSize: 16,
                    },
                }}
            >
                {routes.map(({ path, element, headerShown }) => (
                    <Stack.Screen
                        key={path}
                        name={path}
                        component={element}
                        options={({ route }) => ({
                            headerShown: headerShown !== undefined ? headerShown : false,
                            title: route.params?.title || 'Передвижения',
                        })}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;