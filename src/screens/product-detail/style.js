import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "../../utils/constants/colors";

const { height } = Dimensions.get("window"); 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', 
      height: height / 4,
      borderRadius: 30,
      margin: 15,  
    },
    title: {
      fontFamily: 'Pacifico-Regular',
      fontSize: 20,
      fontWeight: 'bold', 
      color: '#000'
    },
    description: {
      fontFamily: 'Pacifico-Regular',
      fontSize: 13, 
      margin: 5, 
      color: '#000'
    },
    price: {
      fontFamily: 'Pacifico-Regular',
      fontSize: 18, 
      margin: 5, 
      color: COLORS.accent,
      fontWeight: 'bold',
    },
    time: {
      fontFamily: 'Pacifico-Regular',
      fontSize: 17, 
      margin: 5, 
      color: COLORS.gray,
      fontWeight: 'bold',
    },
    containerPrice:{
      flexDirection: "row",
      alignContent: "space-between",
    },
    imageContainer: {
      flex: 1,
      justifyContent: "center", 
      borderRadius: 60,
      width: '100%',
    },
    image:{  
      borderRadius: 30, 
    },
    button: {
      backgroundColor: COLORS.primary,
      padding: 12,
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    textButton: {
      color: COLORS.blanco,
    }
  });

  export default styles;