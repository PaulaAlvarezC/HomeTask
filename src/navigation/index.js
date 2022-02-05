import CartStackNavigation from './cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import OrderStackNavigation from './order';
import React from 'react';
import ShopStackNavigation from './shop';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer >
            <Tab.Navigator initialRouteName='Shop' screenOptions={{
                headerShown: false,
            }}>
                <Tab.Screen
                    name='Servicios'
                    component={ShopStackNavigation} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name='home-outline' size={20} />
                        )          
                    }}
                        
                />
                <Tab.Screen
                    name='Carrito'
                    component={CartStackNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name='cart-outline' size={20} />
                        )
                    }} 
                />
                 {/*
              <Tab.Screen
                    name='Compras'
                    component={OrderStackNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name='folder-open-outline' size={20} />
                        )
                    }} 
                /> */ }
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;