import React from 'react';
import { routes } from './routes';
import { NativeRouter, Route, Routes } from "react-router-native"

const Router = () => {
    return (
        <NativeRouter>
            <Routes>
                {routes && routes.map(({ path, element }) => {
                    return <Route key={path} path={path} element={element} />
                })}
            </Routes>
        </NativeRouter>
    );
}

export default Router;
