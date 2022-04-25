import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';

import styles from './ProductCard.style';

const ProductCard = ({ products, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: products.image }}
                />
                <View style={styles.bodyContainer}>
                    <Text style={styles.title}>{products.title}</Text>
                    <Text style={styles.price}>{products.price} $</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ProductCard;
