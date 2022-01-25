import {
   ImageBackground,
   SafeAreaView,
   Text,
   View
} from 'react-native';

import React from 'react';
import styles from './style';

const ProductDetail = ({navigation, route}) => {
   const { product } = route.params
 
   return (
     <SafeAreaView style={styles.container}>
     

 
       <ImageBackground
          source={ product.image } resizeMode="cover" style={styles.imageContainer} imageStyle={ styles.image } 
        >
          <View style={styles.container}></View>
        </ImageBackground>
       
       
        
       <View style={styles.container}> 
         <Text style={styles.title} >{product.name}</Text>
         <View style={styles.containerPrice}> 
         <Text style={styles.price}>$ {product.price}</Text>
         <Text style={styles.time}> x {product.tiempo }</Text> 
         </View>
         <Text style={styles.description}> {product.description}</Text> 
       </View>
     </SafeAreaView>
   );
 };
 
 
 
 export default ProductDetail;