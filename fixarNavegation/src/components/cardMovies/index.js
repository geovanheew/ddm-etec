// src/components/CardMovies/index.js
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importar o hook useNavigation
import styles from './style'; // Verifique se o caminho está correto

export default function CardMovies({ titulo, nota, imagem }) {
    const navigation = useNavigation(); // Usando o hook de navegação

    return (
        <TouchableOpacity 
            style={styles.containerJogos} 
            onPress={() => navigation.navigate('Details', { 
                titulo: titulo, // Passando o título
                nota: nota, // Passando a nota
                imagem: imagem // Passando a imagem
            })} // Navegando para a tela de detalhes
        >
            <Image style={styles.images} source={require(`../../Img/${imagem}`)} />
            <Text style={styles.titulo}>{titulo}</Text> 
            <Text style={styles.textNota}>{nota}</Text>
        </TouchableOpacity>
    );
}
