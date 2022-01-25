import {
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import React from 'react';
import styles from './style';

const CategoryItem = ({item, onSelected}) => {   
    return (  
        <View style={styles.container}>
            <ImageBackground source={ item.image } resizeMode="cover" style={styles.imageContainer} imageStyle={ styles.image } >
                <TouchableOpacity 
                    style={styles.containerTouchable}
                    onPress={() => onSelected(item)}
                >
                
                    <View>
                    <Text style={styles.title}>{item.title}</Text>
                    </View>
            
            </TouchableOpacity>
          </ImageBackground>
         </View>
    );
  };
  
  export default CategoryItem;