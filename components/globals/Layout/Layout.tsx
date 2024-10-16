import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';
import Header from '../Info';
import Tabs from '../Tabs';

interface ILayout {
    showTabs?: boolean;
    children: ReactNode;
}

const Layout: FC<ILayout> = ({ showTabs, children }) => {
    return (
        <View>
            {showTabs ? <Tabs /> : <Header />}
            {children}
        </View>
    );
}

export default Layout;
