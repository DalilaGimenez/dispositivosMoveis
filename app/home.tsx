import { Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import { homeStyles as styles } from '../styles/styles';
import StyledButton from '../components/StyledButton';


export default function Home() {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Home</Text>
                <Text style={styles.caption}>Escolha a opção desejada.</Text>

                <View style={styles.boxContent} >
                    <Image
                        style={styles.contentImage}
                        source={require('../assets/shopping-cart_5695139.png')}
                    />
                    <Text style={styles.title}>Solicitar Serviço</Text>
                </View>

                <View style={styles.boxContent} >
                    <Image
                        style={styles.contentImage}
                        source={require('../assets/love_5693914.png')}
                    />
                    <Text style={styles.title}>Meus Pets</Text>
                </View>

                <View style={styles.boxContent} >
                    <Image
                        style={styles.contentImage}
                        source={{ uri: 'https://cdn-icons-png.freepik.com/512/5695/5695158.png?ga=GA1.1.15670440.1709681579&', }}
                    />
                    <Text style={styles.title}>Meus Dados</Text>
                </View>



                <Link href="/">Voltar ao login</Link>

            </View>





        </>
    )
}