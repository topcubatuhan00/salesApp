import { StyleSheet, Dimensions } from 'react-native';

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: 'contain',
        backgroundColor: 'white',
        marginTop: 20,
    },
    title: {
        flex: 1,
        fontSize: 22,
        color: 'black',
        fontWeight: '500',
    },
    description: {
        fontSize: 16,
        opacity: 0.8,
        paddingTop: 20,
        paddingBottom: 20,
    },
    bodyContainer: {
        padding: 20,
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        textAlign: 'right',
        color: 'green',
        fontSize: 16,
    },
    category: {
        color: 'black',
        fontWeight: '500',
        opacity: 0.7,
    },
});
