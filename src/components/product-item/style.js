import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
  flex: 1,
  height: height / 5,
  borderRadius: 30,
  margin: 15,
  
  },
  containerTouchable: {
  flex: 1,
  borderRadius: 30,
  shadowColor: 'black',
  shadowOpacity: 0.26,
  shadowOffset: { width: 0, height: 1 },
  shadowRadius: 3, 
  padding: 8,
  alignItems: 'center',
  justifyContent: "center", 
  backgroundColor: 'rgba(52, 52, 52, 0.6)',

  },
  name: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  details: {
  fontFamily: 'OpenSans-Regular',
  fontSize: 18,
  color: '#FFF',
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