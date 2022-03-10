import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from '../../utils/constants/colors'

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height / 10,
    borderRadius: 6,
    margin: 3,
    borderColor: COLORS.gray,
    borderWidth: 0.5, 
  },
  containerTouchable: {
      flex: 1,
  },
  header: {
    flex: 1
  },
  name: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
  },
    details: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: 'center',
      justifyContent: 'space-between',
  }
  });


  export default styles;