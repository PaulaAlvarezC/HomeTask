import {
   ImageBackground,
   SafeAreaView,
   Text,
   TouchableOpacity,
   View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { addItem } from '../../store/actions/cart.action';
import styles from './style';

const ProductDetail = ({navigation, route}) => {
   const dispatch = useDispatch();
   const services = useSelector(state => state.services.selected); 
   const handleAddItemCart = () => {
        dispatch(addItem(services));
   }
 
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
        <TouchableOpacity style={styles.button} onPress={() => handleAddItemCart()}>
                    <Text style={styles.textButton}>Agregar al carrito</Text> 
        </TouchableOpacity>
        
       </View>
     </SafeAreaView>
   );
 };
 
 
 
 export default ProductDetail;