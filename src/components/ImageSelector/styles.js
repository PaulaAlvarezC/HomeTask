import { COLORS } from "../../utils/constants/colors";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignContent: 'center',   
        alignItems: 'center',

    },
    image: {
        width: 200, 
        height: 200, 
        borderRadius: 400/ 2,  
       
    },
    button: {
        margin: 12,
        backgroundColor: COLORS.primary,
        padding: 12,
        borderRadius: 10,
        flexDirection: "row", 
        justifyContent: 'center',
        alignContent: 'center',   
        alignItems: 'center',
    },
    textButton: {
        color: COLORS.blanco,
        fontFamily: 'Lato-Regular',
        fontSize: 17,   
        textAlign: "center",
    },
    icon:{
        marginHorizontal: 3,
        color: COLORS.blanco,
        fontFamily: 'Lato-Regular',
        fontSize: 17, 

    }
});