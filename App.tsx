import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>CACHES</Text>
        <Text style={styles.tagline}>Elite Visual Culture & Instant-Earn Engine</Text>
      </View>
      <View style={styles.feedBox}>
        <Text style={styles.feedText}>Vibe Stream Initializing...</Text>
        <Text style={styles.subText}>Low-Data Streaming & Security Shield Active</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  tagline: {
    color: '#A0A0A0',
    fontSize: 12,
    marginTop: 5,
  },
  feedBox: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#0A0A0A',
  },
  feedText: {
    color: '#00FFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  subText: {
    color: '#777777',
    fontSize: 11,
    marginTop: 8,
  },
});
