import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './Login.style';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.in}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../assets/logo.png')} />
                </View>
                <View style={styles.innerContainer}>
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Button text="Login" />
                </View>
            </View>
        </View>
    );
};

export default Login;