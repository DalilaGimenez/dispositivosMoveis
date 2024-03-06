  // styles.js
import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  tinyLogo: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'flex-start',
    //alignItems: 'flex-start',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentImage: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  boxContent: {
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center',
    width: '80%',
    height: 'auto',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  caption: {
    fontSize: 16,
    color: '#555',
  },

});

export { loginStyles, homeStyles };
