import React, {useState, useEffect} from 'react';
import { View, Alert, Image } from 'react-native';
import { Formik } from 'formik';
import styles from './Login.style';

import Config from 'react-native-config';
import usePost from '../../hooks/usePost'

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = ({navigation}) => {
    const { data, loading, error, post } = usePost();
    

    function handleLogin (info){
        post(Config.API_AUTH_URL, info);
    }
    
    if(error && error.message != 'Request failed with status code 401') {
        Alert.alert('Dükkan', 'Bir Sorun Var!');
    }
    if (data) {
        if(data.status == 'Error'){
            Alert.alert('Dükkan', 'Kullanıcı Adı ya da Parola Hatalı!');
        }else{
            navigation.navigate('Products');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
            </View>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <View style={styles.innerContainer}>
                        <Input placeholder="Username"
                            value={values.username}
                            onChangeText={handleChange('username')}
                            iconName="account"
                        />

                        <Input placeholder="Password"
                            value={values.password}
                            onChangeText={handleChange('password')}
                            iconName="key"
                            isSecure
                        />

                        <Button
                            text="Login"
                            onPress={handleSubmit}
                            loading={loading}
                        />

                    </View>
                )}
            </Formik>
        </View>
    );
};

export default Login;