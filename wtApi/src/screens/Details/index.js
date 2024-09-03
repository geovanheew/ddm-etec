import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, Image} from "react-native";
import styles from "./styles.js";

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();
  const { 
    identifier, images, value, crew_total_count, country, vehicle_type, 
    era, arcade_br, realistic_br, simulator_br, release_date, is_premium, 
    realistic_ground_br, simulator_ground_br, event, is_pack, on_marketplace, 
    squadron_vehicle, req_exp, ge_cost, sl_mul_arcade, sl_mul_realistic, 
    sl_mul_simulator, exp_mul, visibility, hull_armor, turret_armor 
  } = route.params || {};

  return (
    <View style={styles.viewContainer}>
      <Image
        resizeMode="contain"
        style={styles.imageBanner}
        source={{ uri: images?.image }}
      />
      <View style={styles.starsContainer}>
      </View>
      <Text style={styles.textBanner}>{identifier}</Text>
      <Text style={styles.textDetails}>Crew: {crew_total_count}</Text>

      {/* Card with vehicle properties */}
      <View style={styles.propertyCard}>
        <Text style={styles.propertyTitle}>Propriedades do Veículo</Text>
        <Text style={styles.propertyText}>Nação: {country}</Text>
        <Text style={styles.propertyText}>Tipo: {vehicle_type}</Text>
        <Text style={styles.propertyText}>Tier: {era}</Text>
        <Text style={styles.propertyText}>BR Arcade: {arcade_br}</Text>
        <Text style={styles.propertyText}>BR Realista: {realistic_br}</Text>
        <Text style={styles.propertyText}>BR Simulação: {simulator_br}</Text>
        <Text style={styles.propertyText}>BR Realista em Solo: {realistic_ground_br}</Text>
        <Text style={styles.propertyText}>BR Simulação em Solo: {simulator_ground_br}</Text>
        <Text style={styles.propertyText}>Evento: {event || 'N/A'}</Text>
        <Text style={styles.propertyText}>Pacote: {is_pack ? 'Sim' : 'Não'}</Text>
        <Text style={styles.propertyText}>No Mercado: {on_marketplace ? 'Sim' : 'Não'}</Text>
        <Text style={styles.propertyText}>Veículo de Esquadrão: {squadron_vehicle ? 'Sim' : 'Não'}</Text>
        <Text style={styles.propertyText}>Requisito de XP: {req_exp}</Text>
        <Text style={styles.propertyText}>Custo em GE: {ge_cost}</Text>
        <Text style={styles.propertyText}>Multiplicador SL Arcade: {sl_mul_arcade}</Text>
        <Text style={styles.propertyText}>Multiplicador SL Realista: {sl_mul_realistic}</Text>
        <Text style={styles.propertyText}>Multiplicador SL Simulação: {sl_mul_simulator}</Text>
        <Text style={styles.propertyText}>Multiplicador de XP: {exp_mul}</Text>
        <Text style={styles.propertyText}>Visibilidade: {visibility}</Text>
        <Text style={styles.propertyText}>Blindagem do Casco: {hull_armor.length > 0 ? hull_armor.join(', ') : 'N/A'}</Text>
        <Text style={styles.propertyText}>Blindagem da Torreta: {turret_armor.length > 0 ? turret_armor.join(', ') : 'N/A'}</Text>
        <Text style={styles.propertyText}>Valor: {value}</Text>
        <Text style={styles.propertyText}>Premium: {is_premium ? 'Sim' : 'Não'}</Text>
        <Text style={styles.propertyText}>Data de Lançamento: {release_date}</Text>
      </View>
    </View>
  );
}
