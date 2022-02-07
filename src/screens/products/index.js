import {
  FlatList,
  SafeAreaView,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { filterServices, selectServices } from '../../store/actions/services.action';
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from '../../components/product-item/index';
import styles from './style';

const Products = ({navigation}) => {
 const dispatch = useDispatch();
 const categoryServices = useSelector(state => state.services.filteredServices);
 const category = useSelector(state => state.categories.selected);
 
 const handleSelectedProduct = (item) => {
   dispatch(selectServices(item.id));
   navigation.navigate('ProductDetail', 
     {
        
       name: item.name,
       image: item.image, 
       /*productId: item.id,
       product: item,
       image: item.image,*/
     }
   );
 }

 const renderProducts= ({item}) => {
   return (
     <ProductItem item={item} onSelected={handleSelectedProduct} />
   )
 }

  useEffect(() => {
    dispatch(filterServices(category.id));
  }, [])
 
  return (
   <SafeAreaView style={styles.container}>
   <View style={styles.container}>
     <FlatList
        data={categoryServices}
        renderItem={renderProducts}
        keyExtractor={item => item.id}
      />
   </View>
 </SafeAreaView>
  );
};



export default Products;