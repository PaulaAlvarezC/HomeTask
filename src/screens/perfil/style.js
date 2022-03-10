import { COLORS } from "../../utils/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1, 
    },
    footer: {
        padding: 12,
        bottomTopColor: "#ccc",
        borderTopWidth: 1,
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
    }
});


export default styles;