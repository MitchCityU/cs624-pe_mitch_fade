import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
  StatusBar,
} from 'react-native';

import icon from './icon.png';

export default function HomeScreen() {
  const [favorite, setFavorite] = useState<string>('');

  const coreCourses = [
    'CS 504 Software Engineering',
    'CS 506 Programming for Computing',
    'CS 519 Cloud Computing Overview',
    'CS 533 Computer Architecture',
    'CS 547 Secure Systems and Programs',
    'CS 622 Discrete Math and Algorithms for Computing',
    'DS 510 Artificial Intelligence for Data Science',
    'DS 620 Machine Learning & Deep Learning',
  ];

  const depthOfStudy = [
    'CS 624 Full-Stack Development - Mobile App',
    'CS 628 Full-Stack Development - Web App',
  ];

  const capstone = ['CS 694 Capstone Project in Computer Science'];

  const openCatalog = () =>
    Linking.openURL(
      'https://cityu.smartcatalogiq.com/2022-2023/ay-2022-2023-catalog/'
    ).catch((e) => console.warn('Failed to open URL', e));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={icon} style={styles.icon} />

        <Text style={styles.label}>Which course did you like?</Text>
        <TextInput
          style={styles.input}
          placeholder="ex. CS624"
          value={favorite}
          onChangeText={setFavorite}
        />
        {favorite.length > 0 && (
          <Text style={styles.youLiked}>
            You liked: <Text style={styles.bold}>{favorite}</Text>
          </Text>
        )}

        <TouchableOpacity onPress={openCatalog}>
          <Text style={styles.link}>View CityU Catalog</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Core Requirements (24 credits)</Text>
          {coreCourses.map((course, i) => (
            <Text key={i} style={styles.item}>{course}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Depth of Study (6 credits)</Text>
          {depthOfStudy.map((course, i) => (
            <Text key={i} style={styles.item}>{course}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Capstone (3 credits)</Text>
          {capstone.map((course, i) => (
            <Text key={i} style={styles.item}>{course}</Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    padding: 16,
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    marginBottom: 12,
  },
  youLiked: {
    fontSize: 16,
    marginBottom: 12,
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    backgroundColor: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
    marginBottom: 12,
  },
  item: {
    fontSize: 16,
    marginVertical: 4,
  },
});
