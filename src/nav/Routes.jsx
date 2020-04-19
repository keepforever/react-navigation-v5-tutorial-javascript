import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import { Center } from '../comps/Center';
import { AuthContext } from '../context/AuthProvider';
import { AppTabs } from './AppTabs';
import { AuthStack } from './stack/AuthStack';

export const Routes = ({}) => {
    const { user, login } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // check if the user is logged in or not
        AsyncStorage.getItem('user')
            .then(userString => {
                if (userString) {
                    // decode it
                    login();
                }
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    if (loading) {
        return (
            <Center>
                <ActivityIndicator size="large" />
            </Center>
        );
    }

    return <NavigationContainer>{user ? <AppTabs /> : <AuthStack />}</NavigationContainer>;
};
