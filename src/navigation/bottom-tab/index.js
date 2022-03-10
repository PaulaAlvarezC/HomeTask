import CartStackNavigation from '../cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PerfilStackNavigation from '../perfil';
import React from 'react';
import ShopStackNavigation from '../shop';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator = () => {
    return (
        <BottomTabs.Navigator initialRouteName='Shop' screenOptions={{
            headerShown: false,
        }}>
            <BottomTabs.Screen
                name='Servicios'
                component={ShopStackNavigation} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name='home-outline' size={20} />
                    )          
                }}
                    
            />
            <BottomTabs.Screen
                name='Carrito'
                component={CartStackNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name='cart-outline' size={20} />
                    )
                }} 
            />
             
         <BottomTabs.Screen
                name='Perfil'
                component={PerfilStackNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name='person-circle-outline' size={20} />
                    )
                }} 
            />  
        </BottomTabs.Navigator>
    )
}

export default BottomTabsNavigator;