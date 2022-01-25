import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import React from 'react';
import styles from './style';

const ProductItem = ({item, onSelected}) => {

 
  return (
    <View style={styles.container} >
      <ImageBackground source={ item.image } resizeMode="cover" style={styles.imageContainer} imageStyle={ styles.image } >  
        <TouchableOpacity 
            style={styles.containerTouchable}
            onPress={() => onSelected(item)}
        >
          
            <View>
                <Text style={styles.name}>{item.name}</Text>
            </View>
            <View>
                 
            </View>
          
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};



export default ProductItem;