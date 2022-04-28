import React from 'react';
import { View, Alert, Image } from 'react-native';
import { Formik } from 'formik';
import styles from './Login.style';
import { useDispatch } from 'react-redux';
import Config from 'react-native-config';
import usePost from '../../hooks/usePost'

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
    const { data, loading, error, post } = usePost();
    const dispatch = useDispatch();
    function handleLogin(info) {
        post(Config.API_AUTH_URL, info);
    }

    if (error && error.message != 'Request failed with status code 401') {
        Alert.alert('Dükkan', 'Bir Sorun Var!');
    }
    if (data) {
        dispatch({ type: 'SET_USER', payload: { user } });
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

const user = {
    "address": {
        "geolocation": {
            "lat": "-37.3159",
            "long": "81.1496"
        },
        "city": "kilcoole",
        "street": "new road",
        "number": 7682,
        "zipcode": "12926-3874"
    },
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
        "firstname": "john",
        "lastname": "doe"
    },
    "phone": "1-570-236-7033",
    "__v": 0
}