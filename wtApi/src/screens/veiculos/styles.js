import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0a0a0a',
      padding: 10,
    },
    card: {
      backgroundColor: '#1e1e1e',
      borderRadius: 10,
      padding: 10,
      margin: 5, // Ajustado para se adequar ao layout de duas colunas
      width: (width / 2) - 20, // Ajustando a largura dos itens para duas colunas
      height: 250,
      overflow: 'hidden',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '80%',
    },
    title: {
      color: '#fff',
      marginTop: 10,
      textAlign: 'center',
    },
    row: {
      justifyContent: 'space-between',
    },
  });

export default styles