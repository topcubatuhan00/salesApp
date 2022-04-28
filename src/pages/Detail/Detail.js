import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import useFetch from '../../hooks/useFetch';
import styles from './Detail.style';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Detail = ({ route }) => {
    const { id } = route.params;


    const { error, data, loading } = useFetch(Config.API_PRODUCT_URL + '/' + id.toString());

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <ScrollView style={styles.all}>
            <View style={styles.container}>
                <Image source={{ uri: data.image }} style={styles.image} />
                <View style={styles.bodyContainer}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.category}>{data.category}</Text>
                    </View>
                    <Text style={styles.description}>{data.description}</Text>
                    <Text style={styles.price}>{data.price} $</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default Detail;
