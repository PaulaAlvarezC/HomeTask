import { Dimensions, StyleSheet } from "react-native";

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
      color: '#1B0077',
      fontWeight: 'bold',
    },
    time: {
      fontFamily: 'Pacifico-Regular',
      fontSize: 17, 
      margin: 5, 
      color: '#A1A2A4',
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
    }
  });

  export default styles;