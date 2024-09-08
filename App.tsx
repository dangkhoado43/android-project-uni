import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome</Text>
      <Text style={styles.text}>DE170711</Text>
      <Text style={styles.text}>Class: SE17C</Text>
      <Text style={styles.text}>Name: Khoa</Text>
      <Text style={styles.additiontext}>Hometown: Da Nang</Text>
      <Text style={styles.additiontext}>Address: Da Nang</Text>
      <Text>Preferences: Research, Music</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  additiontext: {
    marginBottom: 10,
  }
});
