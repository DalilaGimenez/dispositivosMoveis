import { StatusBar } from 'expo-status-bar';
import { Text, Image, View } from 'react-native';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import { loginStyles as styles } from '../styles/styles';
import { router } from 'expo-router'

export default function Login() {
  const handleLogin = () => {
    router.push('home')
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/logo.png')}
      />
      <Text>Tela de login</Text>
      <StyledInput 
      onChangeText={(texto) => console.log('Email',texto)}
      placeholder='Digite o seu e-mail' />
      
      <StyledInput
      onChangeText={(texto) => console.log('Senha',texto)}
      placeholder='Digite a senha' />

      <StyledButton 
      title='Acessar o app'
      onPress={handleLogin}
      color='green'
      />

      <StatusBar style="auto" />
    </View>
  );
}

