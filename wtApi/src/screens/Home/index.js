import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import { useState, useEffect } from 'react';

export default function HomeIndex({ navigation }) {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function fetchVehicles() {
      try {
        const response = await fetch('https://www.wtvehiclesapi.sgambe.serv00.net/api/vehicles');
        const data = await response.json();
        setVehicles(data); // assuming the data is directly an array of vehicles
      } catch (error) {
        console.log('Erro ao Buscar Veículos', error);
      }
    }
    fetchVehicles();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />

      <TouchableOpacity
        style={styles.nationButton}
        onPress={() => navigation.navigate('NationList')}
      >
        <Text style={styles.nationButtonText}>Explore Nations</Text>
      </TouchableOpacity>

      <View style={{ width: "90%" }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={vehicles}
          keyExtractor={(item) => item.identifier}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details', { ...item })}>
              <View style={styles.card}>
                {item.images.image && (
                  <Image
                    source={{ uri: item.images.image }}
                    style={styles.image}
                    resizeMode="contain"
                  />
                )}
                <Text style={styles.title}>{item.identifier}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    width: 200,
    height: 250,
    overflow: 'hidden',
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
  nationButton: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 15,
    margin: 20,
    width: 200,
    alignItems: 'center',
  },
  nationButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
