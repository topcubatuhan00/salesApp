import React from 'react';
import AuthProvider from './contex/AuthProvider';
import Router from './Router';

export default () => {
    return (
        <AuthProvider>
            <Router />
        </AuthProvider>
    );
};