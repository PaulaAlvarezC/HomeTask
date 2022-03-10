import RNFS from 'react-native-fs';
import { insertPerfil } from '../../db';

export const ADD_PERFIL = 'ADD_PERFIL' 



export const addPerfil = (nombre, apellido, edad, image) => {

    //console.log(nombre, apellido, edad, image);
     
    return async dispatch => {


        const fileName = image.split('/').pop();
        const Path = `file:///${RNFS.DocumentDirectoryPath}/${fileName}`;

        try {
            await RNFS.copyFile(image, Path);

            const result = await insertPerfil(nombre, apellido, edad, Path);
            dispatch({
                type: ADD_PERFIL,
                payload: {
                    id: result.insertId,
                    nombre,
                    apellido,
                    edad,
                    image: Path, 
                }
            });
            console.log(result);
            console.warn('add', result);
        } catch (e) {
            console.log(e);
        }
    }
}
 