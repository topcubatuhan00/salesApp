import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        tintColor: '#64b5f6',
        height: Dimensions.get("window").height /4,
        width: Dimensions.get("window").width,
        resizeMode: 'contain',
    },
    innerContainer: {
        width: '100%',
    }
});