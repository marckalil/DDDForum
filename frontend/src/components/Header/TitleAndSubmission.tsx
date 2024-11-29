import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';

export function TitleAndSubmission() {
  return (
    <View style={styles.titleAndSubmission}>
      <Text style={styles.h1}>Domain-Driven Designers</Text>
      <Text style={styles.h3}>
        Where awesome domain driven designers are made
      </Text>
      <Link href="/submit" style={styles.link}>
        submit
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  titleAndSubmission: {
    flex: 1
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  h3: {
    fontSize: 16
  },
  link: {
    marginTop: 4,
    textDecorationLine: 'underline'
  }
});
