import React from 'react';
import { View, FlatList, Text } from 'react-native';
import Config from 'react-native-config';
import styles from './Products.style';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';


const Products = ({ navigation }) => {
    const { error, data, loading } = useFetch(Config.API_URL)

    const handleSelect = (id) => {
        navigation.navigate("Details", {id});
    };

    const renderProduct = ({ item }) => <ProductCard products={item} onSelect={() => handleSelect(item.id)} />;

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderProduct}
            />
        </View>
    );
};

export default Products;
