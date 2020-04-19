import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Center } from '../../comps/Center';
import { Text, TouchableOpacity, FlatList, Button } from 'react-native';
import { AuthContext } from '../../context/AuthProvider';
import { addProductRoutes } from '../addProductRoutes';
import faker from 'faker';

const Stack = createStackNavigator();

function Feed({ navigation }) {
    return (
        <Center>
            <FlatList
                style={{ width: '100%' }}
                renderItem={({ item }) => {
                    return (
                        <Button
                            title={item}
                            onPress={() => {
                                navigation.navigate('Product', {
                                    name: item,
                                });
                            }}
                        />
                    );
                }}
                keyExtractor={(product, idx) => product + idx}
                data={Array.from(Array(50), () => faker.commerce.product())}
            />
        </Center>
    );
}

export const HomeStack = ({}) => {
    const { logout } = useContext(AuthContext);
    return (
        <Stack.Navigator initialRouteName="Feed">
            {addProductRoutes(Stack)}
            <Stack.Screen
                name="Feed"
                options={{
                    headerRight: () => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    logout();
                                }}
                            >
                                <Text>LOGOUT</Text>
                            </TouchableOpacity>
                        );
                    },
                }}
                component={Feed}
            />
        </Stack.Navigator>
    );
};
