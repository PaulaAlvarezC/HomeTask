import { COLORS } from '../../utils/constants/colors';
import Perfil from '../../screens/perfil';
import { Platform } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const PerfilStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Perfil'
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
 
            <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>
    )
}

export default PerfilStackNavigation;