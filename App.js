import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Status bar exercise</Text>
      <StatusBar style="auto" 
      backgroundColor='cyan'
      //hidden={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight:0,
    //alignItems: 'center',
   //justifyContent: 'center',
  },
});
