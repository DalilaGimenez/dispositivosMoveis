import React from 'react';
import { View } from 'react-native';
import Login from './components/Login';
import { styles } from './styles/Styles'; // Importando os estilos

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

