import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './Input.style';

const Input = ({placeholder, value ,onChangeText}) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} />
        </View>
    );
};

export default Input;
