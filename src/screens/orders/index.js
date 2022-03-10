import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { deleteOrders, getOrders } from "../../store/actions/orders.action";
import { useDispatch, useSelector } from "react-redux";

import OrderItem from "../../components/order-item";
import styles from "./style";

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);
    const handleDeteleOrder = (id) => { 
        dispatch(deleteOrders(id)); 
    };
    const renderItems = (data) => (
        <OrderItem item={data.item} onDelete={handleDeteleOrder} />
    )
    useEffect(() => {
        dispatch(getOrders());
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={orders}
                    renderItem={renderItems}
                    keyExtractor={(item) => item.id}
                />
            </View> 
        </View>
    )
}

export default Orders;