import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
// Import { sendGetRequest } from './api';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={style.header}>
        <Text style={style.headerText}>Flowise Social Media Platform</Text>
      </View>
      <View style={styles.body}>
        <Text>Coming soon...</text>
      </View>
    </SafeAreaview>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundcolor: '#ffffff',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: ynmsg
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;