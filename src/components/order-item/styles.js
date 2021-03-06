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
  date: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
  },
    details: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  total: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    fontWeight: 'bold',
  },
    icon:{
      color: COLORS.primary,
      
    }
  });


  export default styles;