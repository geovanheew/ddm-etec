import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const viewStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#CAF0F8',
        borderColor: '#90E0EF',
        paddingHorizontal: 85,
    },
    scroll: {
        flexGrow: 1,
        height: windowHeight, // definindo a altura para preencher a tela
    }
});

export default viewStyles;
