import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import styles from './styles';

const Perfil = ({item, onDelete}) => {
  const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.date}>{formatDate(item.date)}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.total}>$ {item.total}</Text>

          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Ionicons style={styles.icon} name="trash-outline" size={20} />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Ionicons style={styles.icon} name="trash-outline" size={20} />
          </TouchableOpacity>
        </View>
        
    </View>
  );
};



export default Perfil;
