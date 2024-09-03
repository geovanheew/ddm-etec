import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    padding: 20,
    paddingBottom: 40, // Adicione paddingBottom para evitar que o conteúdo fique muito próximo da borda inferior
  },
  imageBanner: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10, // Reduza a margem inferior
  },
  backButton: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(25,26,48,0.8)',
    borderRadius: 27,
    position: 'absolute',
    top: 50,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  starsContainer: {
    marginTop: 10, // Ajuste a margem superior
    marginBottom: 10,
  },
  textBanner: {
    fontSize: 30,
    color: "white",
    marginTop: 15,
    fontWeight: 'Bold',
    textAlign: 'center',
  },
  textDetails: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  propertyCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 15,
    marginTop: 10, // Reduza a margem superior
  },
  propertyTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  propertyText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
});

export default styles;
