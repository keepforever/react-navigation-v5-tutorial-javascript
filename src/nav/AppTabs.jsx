import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, EvilIcons } from '@expo/vector-icons';
import { HomeStack } from './stack/HomeStack';
import { SearchStack } from './stack/SearchStack';

const Tabs = createBottomTabNavigator();

export const AppTabs = ({}) => {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                        return <AntDesign name={'home'} size={size} color={color} />;
                    } else if (route.name === 'Search') {
                        return <EvilIcons name={'search'} size={size} color={color} />;
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tabs.Screen name="Home" component={HomeStack} />
            <Tabs.Screen name="Search" component={SearchStack} />
        </Tabs.Navigator>
    );
};
