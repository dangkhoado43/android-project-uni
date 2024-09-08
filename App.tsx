import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Student Roll Number: DE170711</Text>
      <Text style={styles.text}>Class: SE17C</Text>
      <Text>Name: Khoa</Text>
      <Text>Hometown: Da Nang</Text>
      <Text>Address: Da Nang</Text>
      <Text>Preferences: Research new knowledge, listen to music</Text>
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
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
