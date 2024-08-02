import { Text, View, Image } from 'react-native';
import estilo from './bodyStyle'

export function Card({ title, description, imageUrl, percent }) {
    return (
        <>
            <View style={estilo.cardTarefa}>
                <Image style={estilo.imagemCard} source={{ uri: imageUrl }} />
                <View style={{ marginLeft: 15, width: 150 }}>
                    <Text style={estilo.tituloCard}>{title}</Text>
                    <Text style={estilo.textoCard}>{description}</Text>
                </View>
                <Text style={{ fontSize: 25 }}>{percent}%</Text>
            </View>
        </>
    )
}

export function Header() {
    return (
        <>
            <Text style={estilo.titulo}>Minha Rotina Semanal</Text><Text style={estilo.subtitulo}>Total de Horas = 168 - 100%</Text><View style={{ width: '95%', flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: "space-between" }}>
                <Text style={estilo.tituloCard}>Atividade</Text>
                <Text style={estilo.tituloCard}>Descrição</Text>
                <Text style={estilo.tituloCard}>Porcentagem </Text>
            </View>
        </>
    )
}
