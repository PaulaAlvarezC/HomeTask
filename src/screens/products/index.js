import {
  FlatList,
  SafeAreaView,
  View,
} from 'react-native';

import ProductItem from '../../components/product-item/index';
import React from 'react';
import { SERVICES } from '../../utils/data/services';
import styles from './style';

const Products = ({navigation, route}) => {
 const service = SERVICES.filter(service => service.category === route.params.categoryId);

 const handleSelectedProduct = (item) => {
   navigation.navigate('ProductDetail', 
     {
       productId: item.id,
       name: item.name,
       product: item,
       image: item.image,
     }
   );
 }

 const renderProducts= ({item}) => {
   return (
     <ProductItem item={item} onSelected={handleSelectedProduct} />
   )
 }
  return (
   <SafeAreaView style={styles.container}>
   <View style={styles.container}>
     <FlatList
        data={service}
        renderItem={renderProducts}
        keyExtractor={item => item.id}
      />
   </View>
 </SafeAreaView>
  );
};



export default Products;