import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
import styles from "./styles.js";

const nations = [
  { id: 'usa', name: 'Estados Unidos', flag: 'https://wiki.warthunder.com/images/thumb/9/9f/USA_flag.png/130px-USA_flag.png' },
  { id: 'germany', name: 'Alemanha', flag: 'https://wiki.warthunder.com/images/thumb/e/ea/Germany_flag.png/130px-Germany_flag.png' },
  { id: 'ussr', name: 'URSS', flag: 'https://wiki.warthunder.com/images/thumb/6/63/USSR_flag.png/130px-USSR_flag.png' },
  { id: 'britain', name: 'Reino Unido', flag: 'https://wiki.warthunder.com/images/thumb/d/d0/Britain_flag.png/130px-Britain_flag.png' }, // Atualizado
  { id: 'japan', name: 'Japão', flag: 'https://wiki.warthunder.com/images/thumb/e/ea/Japan_flag.png/130px-Japan_flag.png' },
  { id: 'china', name: 'China', flag: 'https://wiki.warthunder.com/images/thumb/e/e3/China_flag.png/130px-China_flag.png' },
  { id: 'italy', name: 'Itália', flag: 'https://wiki.warthunder.com/images/thumb/f/f0/Italy_flag.png/130px-Italy_flag.png' },
  { id: 'france', name: 'França', flag: 'https://wiki.warthunder.com/images/thumb/e/ed/France_flag.png/130px-France_flag.png' },
  { id: 'sweden', name: 'Suécia', flag: 'https://wiki.warthunder.com/images/thumb/4/43/Sweden_flag.png/130px-Sweden_flag.png' },
  { id: 'israel', name: 'Israel', flag: 'https://wiki.warthunder.com/images/thumb/8/8b/Israel_flag.png/130px-Israel_flag.png' },
];

export default function NationList({ navigation }) {
  const handlePress = (nationId) => {
    navigation.navigate('VehicleList', { nation: nationId });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePress(item.id)}>
      <Image source={{ uri: item.flag }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={nations}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2} // Definindo duas colunas
        columnWrapperStyle={styles.row} // Estilizando o wrapper das colunas
      />
    </View>
  );
}