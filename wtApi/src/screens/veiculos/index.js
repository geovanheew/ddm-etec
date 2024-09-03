import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import styles from './styles';

const { width } = Dimensions.get('window');

export default function VehicleList({ route, navigation }) {
  const { nation } = route.params;
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function fetchVehicles() {
      try {
        const response = await fetch('https://www.wtvehiclesapi.sgambe.serv00.net/api/vehicles');
        const data = await response.json();
        const filteredVehicles = data.filter(vehicle => vehicle.country === nation);
        setVehicles(filteredVehicles);
      } catch (error) {
        console.log('Erro ao Buscar Veículos', error);
      }
    }
    fetchVehicles();
  }, [nation]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Details', { ...item })}>
      {item.images.image && (
        <Image
          source={{ uri: item.images.image }}
          style={styles.image}
          resizeMode="contain"
        />
      )}
      <Text style={styles.title}>{item.identifier}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.identifier}
        renderItem={renderItem}
        numColumns={2} // Definindo duas colunas
        columnWrapperStyle={styles.row} // Estilizando o wrapper das colunas
      />
    </View>
  );
}