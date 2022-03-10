import { COLORS } from "../../utils/constants/colors";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginHorizontal:20,
    },
    input: {
        borderBottomColor: COLORS.accent,
        borderBottomWidth: 1,
        paddingVertical: 10, 
        
    },
    opacity: {
        opacity: 0.5,
    },
    messageText: {
        fontSize: 12,
        color: 'red',
        marginVertical: 5
    }
});