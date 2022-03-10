import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import React, { useState } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchCamera } from 'react-native-image-picker';
import { styles } from './styles';

const ImageSelector = ({ onImage }) => {
    const [pickerResponse, setPickerResponse] = useState();
    const IS_IOS = Platform.OS === 'ios';

    const handleTakePicture = async () => {
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false,
        }

        let granted;

        if(IS_IOS) {
            granted = await request(PERMISSIONS.IOS.CAMERA);
        } else {
            granted = await request(PERMISSIONS.ANDROID.CAMERA);
        }

        if(granted === RESULTS.GRANTED) {
            launchCamera(options, (res) => {
                if(!res.didCancel && !res.error) {
                    setPickerResponse(res.assets[0]);
                    onImage && onImage(res.assets[0].uri);
                }
            })
        } else {
            //console.warn('Permission denied')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickerResponse ? (<Text>No hay una imagen seleccionada</Text>) : (
                    <Image style={styles.image} source={{ uri: pickerResponse.uri }} />
                )}
            </View> 
            <TouchableOpacity  style={styles.button} onPress={() => handleTakePicture()}>
            <Text style={styles.textButton}>
            <Ionicons style={styles.icon} name="camera-outline" size={18} />
                 Tomar foto</Text>  
          </TouchableOpacity>
        </View>
    )
}

 

export default ImageSelector;