import React from 'react';
import LottieView from 'lottie-react-native'

import {LogBox} from "react-native";

LogBox.ignoreLogs([
"exported from 'deprecated-react-native-prop-types'.",
])

const Error = () => {
    return <LottieView source={require('../../assets/98642-error-404.json')} autoPlay />;
};

export default Error;
