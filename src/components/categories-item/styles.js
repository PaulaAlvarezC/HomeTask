import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: height / 4,
      borderRadius: 30,
      margin: 15,
      justifyContent: "center", 
    },
    containerTouchable: {
        flex: 1,
        borderRadius: 30,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,  
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        alignItems: 'center',
        justifyContent: "center",
    },
    title: {
        fontFamily: 'Pacifico-Regular',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center",
        color: '#FFF'
    },
    imageContainer: {
      flex: 1,
      justifyContent: "center", 
      borderRadius: 60,
    },
    image: { 
      borderRadius: 30,  
      
    },
  });


  export default styles;