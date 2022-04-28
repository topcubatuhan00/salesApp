import React from 'react';
import { View, Text, Image } from 'react-native';
import { Formik } from 'formik';
import styles from './Login.style';


import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {

    const handleLogin = (values) => {
        console.log(values);
    }

    return (
        <View style={styles.container}>
            <View style={styles.in}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../assets/logo.png')} />
                </View>
                <Formik initialValues={{username: '', password: '',}} onSubmit={handleLogin}>
                    {({handleSubmit, values, handleChange}) => (<View style={styles.innerContainer}>
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
                        <Button text="Login" onPress={handleSubmit}/>
                    </View>)}
                </Formik>
            </View>
        </View>
    );
};

export default Login;