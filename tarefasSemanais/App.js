import React from 'react'; // IMPORTA AS FUNÇÕES DO REACT
import viewStyles from "./src/components/styles/viewStyles"; // IMPORTA OS ESTILOS

import { View, ScrollView, FlatList, Text} from 'react-native';
import { Card, Header } from "./src/components/body/body";
import CardData from "./data/index.js" //IMPORTA A INFORMAÇÕES DOS CARDS

export default function App() {
  return (
    <ScrollView contentContainerStyle={viewStyles.scroll} showsVerticalScrollIndicator={false}>
      <View style={viewStyles.container}>
      <Header/>
      <FlatList
        data={CardData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />
      </View>
    </ScrollView>
  );
}

// Por Geovanne e Maria E. S.
//