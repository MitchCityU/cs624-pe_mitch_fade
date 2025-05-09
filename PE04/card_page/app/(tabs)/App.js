// PE04 - Card Page
// Reference: Code was based on Listing 4.14 Modifying Profile Card styles to fix the layout (used in HOS05)

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, FlatList, Animated } from 'react-native';

const users = Array(6).fill({
  name: 'Mitch Fade',
  title: 'Python Developer',
  description: 'Mitch mostly develops backend applications written in Python on satellite ground station servers in the arctic.'
});

const ProfileCard = ({ user }) => {
  const [expanded, setExpanded] = useState(false);
  const scale = useState(new Animated.Value(1))[0];

  const toggleExpand = () => {
    Animated.spring(scale, {
      toValue: expanded ? 1 : 1.2,
      useNativeDriver: true,
    }).start(() => {
      setExpanded(!expanded);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={toggleExpand}>
      <Animated.View style={[styles.cardContainer, { transform: [{ scale }] }]}>
        <View style={styles.cardImageContainer}>
          <Image source={require('./assets/user.png')} style={styles.cardImage} />
        </View>
        <Text style={styles.cardName}>{user.name}</Text>
        <Text style={styles.cardTitle}>{user.title}</Text>
        <Text style={styles.cardDescription}>{user.description}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ProfileCard user={item} />}
        contentContainerStyle={{ paddingVertical: 20 }}
      />
    </View>
  );
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    /*
        Aligns the circle in the horizontal center of the Profile Card.
    */
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400
    },
    /*
        Aligns the user image in the horizontal center of the circle.
        Provides space between the top of the circle and the top of the Profile Card.
        Provides padding between the inner part of the circle and the contained image
    */
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15 
    },
    cardImage: {
        width: 80,
        height: 80
    }
});