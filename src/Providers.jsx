import React from 'react';
import { AuthProvider } from './context/AuthProvider';
import { Routes } from './nav/Routes';

export const Providers = ({}) => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
};
