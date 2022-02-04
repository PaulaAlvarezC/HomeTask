import { COLORS } from '../../utils/constants/colors';
import Orders from '../../screens/orders';
import { Platform } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const OrderStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Orders'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
 
            <Stack.Screen name="Compras" component={Orders} />
        </Stack.Navigator>
    )
}

export default OrderStackNavigation;