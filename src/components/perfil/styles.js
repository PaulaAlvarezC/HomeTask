import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "../../utils/constants/colors";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: height / 10,
    borderRadius: 6,
    margin: 3,
    borderColor: COLORS.gray,
    borderWidth: 0.5, 
  },
  header: {
    flex: 1
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