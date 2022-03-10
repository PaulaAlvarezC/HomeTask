import {
   FlatList,
   SafeAreaView,
   View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CategoryItem from '../../components/categories-item';
import React from 'react';
import { selectCategory } from '../../store/actions/category.action';
import styles from './style';

const Categories = ({navigation}) => {
   const dispatch = useDispatch();
   const categories = useSelector(state => state.categories.categories);
   
    
   const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', 
      {
        /*categoryId: item.id,
        name: item.title,
        image: item.image,*/ 
        name: item.title,
        color: item.color,
        image: item.image,
        
      }
    );
  }

  const renderCategories = ({item}) => {
    return (
      <CategoryItem item={item} onSelected={handleSelectedCategory} />
    )
  }

   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.container}>
         <FlatList
            data={categories}
            renderItem={renderCategories}
            keyExtractor={item => item.id}
          />
       </View>
     </SafeAreaView>
   );
 };
 
 
 
 export default Categories;