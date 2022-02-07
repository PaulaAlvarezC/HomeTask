import {
   ImageBackground,
   SafeAreaView,
   Text,
   View
} from 'react-native';

import React from 'react';
import styles from './style';
import { useSelector } from 'react-redux';

const ProductDetail = ({navigation, route}) => {
   const services = useSelector(state => state.services.selected); 
 
   return (
     <SafeAreaView style={styles.container}>
     

 
       <ImageBackground
          source={ services.image } 
          resizeMode="cover" 
          style={styles.imageContainer} 
          imageStyle={ styles.image } 
        >
          <View style={styles.container}></View>
        </ImageBackground>
        
       <View style={styles.container}> 
         <Text style={styles.title} >{services.name}</Text>
         <View style={styles.containerPrice}> 
         <Text style={styles.price}>$ {services.price}</Text>
         <Text style={styles.time}> x {services.tiempo }</Text> 
         </View>
         <Text style={styles.description}> {services.description}</Text> 
       </View>
     </SafeAreaView>
   );
 };
 
 
 
 export default ProductDetail;