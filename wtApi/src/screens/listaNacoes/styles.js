// styles.js
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
    margin: 5,
    width: (width / 2) - 20, // Ajustando a largura dos itens para duas colunas
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 60,
    borderRadius: 10,
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

export default styles;
