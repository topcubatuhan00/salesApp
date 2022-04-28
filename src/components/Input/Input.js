import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './Input.style';

const Input = ({placeholder, value ,onChangeText, iconName, isSecure}) => {
    return (
        <View style={styles.container}>
            <TextInput
            placeholder={placeholder}
            style={styles.textInput}
            onChange={onChangeText}
            value={value} 
            nChangeText={onChangeText}
            placeholderTextColor='black'
            secureTextEntry={isSecure}
            />
            <Icon color='black' name={iconName} size={25} />
        </View>
    );
};

export default Input;
