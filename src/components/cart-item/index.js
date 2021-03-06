import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import styles from './styles';

const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.name}>{item.name}</Text>
        </View>
        <View style={styles.details}>
          <Text>Cantidad horas: {item.quantity}</Text>
          <Text>$ {item.price}</Text>
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Ionicons name="trash-outline" size={20} />
          </TouchableOpacity>
        </View>
    </View>
  );
};



export default CartItem;
