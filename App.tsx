import { StyleSheet, View } from 'react-native';
import BienvenidaApp from './src/Screen/BienvenidaApp';

export default function App() {
  return (
    <View style={styles.container}>
        <BienvenidaApp /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
