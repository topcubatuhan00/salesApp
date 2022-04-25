import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 10,
        borderWidth: 1,
        borderColor: '#8D8DAA',
        flexDirection: 'row',
        borderRadius: 10,
    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: 'white',
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#F7F5F2',
        padding: 5,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    price: {
        textAlign: 'right',
        fontSize: 16,
        color: '#F56D91',
        fontStyle: 'italic',
    },
});