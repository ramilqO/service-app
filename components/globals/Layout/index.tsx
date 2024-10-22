import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import Tabs from '../Tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ILayout {
    showTabs?: boolean;
    children: ReactNode;
}

const Layout: FC<ILayout> = ({ showTabs, children }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Начальное значение opacity

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <SafeAreaView>
            {showTabs && <Tabs />}
            <Animated.View style={{ opacity: fadeAnim }}>
                {children}
            </Animated.View>
        </SafeAreaView>
    );
}

export default Layout;