import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react';

import ImageSelector from '../../components/ImageSelector'
import Input from '../../components/input';
import { addPerfil } from '../../store/actions/perfil.action';
import styles from "./style";
import { useDispatch } from 'react-redux'

const Perfil = ({ navigation }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const nombreInput = useRef();
    const apellidoInput = useRef();
    const edadInput = useRef();
    const dispatch = useDispatch() ;
    const [image, setImage] = useState(''); 

    const onchange = (value, type) => {
        if(type === 'nombre') {
            setNombre(value)
        }
        if(type === 'apellido') {
            setApellido(value)
        }
        if(type === 'edad') {
            setEdad(value)
        }

        /*if(nombreInput.current.state.validate && passwordInput.current.state.validate) {
                setIsNotValid(false);
        }*/
    }

    const handleSave = () => {
        dispatch(addPerfil(nombre, apellido, edad, image))
        //navigation.navigate('Servicios');
        
            Alert.alert(
               'Perfil Guardado'
            )
         
    }

    const handleOnImage = (uri) => {
        setImage(uri)
    }
 

    return (
        <ScrollView>
            <View style={styles.container}>
                
                <ImageSelector onImage={handleOnImage}/> 
                <Input 
                        ref={nombreInput}
                        label='Nombre' 
                        placeholder='Ingresa tu Nombre'
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        type='text'
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeInput={(value) => onchange(value, 'nombre')}
                        maxLength={60}
                    />
                <Input 
                        ref={apellidoInput}
                        label='Apellido' 
                        placeholder='Ingresa tu Apellido'
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        type='text'
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeInput={(value) => onchange(value, 'apellido')}
                        maxLength={60}
                    />
                <Input 
                        ref={edadInput}
                        label='Edad' 
                        placeholder='Ingresa tu Edad'
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        type='number'
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeInput={(value) => onchange(value, 'edad')}
                        maxLength={60}
                    />
                     <TouchableOpacity style={styles.button} onPress={() => handleSave()}>
                        <Text style={styles.textButton}>Guardar</Text> 
                    </TouchableOpacity>
 
            </View>
        </ScrollView>
    )
}

export default Perfil;

 