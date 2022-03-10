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
    confirm: {
        backgroundColor: COLORS.primary,
        padding: 12,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    total: {
        flexDirection: "row",
    },
    text: {
        fontSize: 18,
        fontFamily: 'Lato-Regular',
        color: COLORS.blanco,
    }
});


export default styles;