/// Listing 4.20 Completed Profile Card example
/*
  let’s add a shadow to the person’s name so it stands out from the other text.
*/
// Listing 4.17 Setting font styles for Text elements in the Profile Card
/*
    Modify the font styles for the name, occupation, and description text helps differentiate each of the sections.

    fontSize adjusts the size of the text in a Text element.
    fontStyle changes the font style.
    fontWeight refers to the thickness of the font.
        The default is 'normal' or '400'. 
        The options for fontWeight are 'normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', and '900'. 
        The smaller the value, the lighter/thinner the text. 
        The larger the value, the thicker/bolder the text.
*/
// Listing 4.15 Adding text to the Profile Card
/*
    You need to add information about the person: name, occupation, and a brief profile description. 
    All that information is text based, so the next thing you’ll learn is how to style Text components.
*/

import React, { Component } from 'react';
import { Image, StyleSheet, Text, View} from 'react-native'; 

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage}
                   source={require('./assets/user.png')}/>
          </View>
          <View>
            <Text style={styles.cardName}>
              John Doe
            </Text>
          </View>
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}> 
              React Native Developer
            </Text>
          </View>
          <View>
            <Text style={styles.cardDescription}>
              John is a really great JavaScript developer. He
              loves using JS to build React Native applications
              for iOS and Android.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
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
    },
    /*
        You can use the textShadowColor, textShadowOffset, and textShadowRadius properties to add a shadow to a Text element. 
        To create a shadow, you need to specify three things:
            The color
            The offset
            The radius

        The offset specifies the position of the shadow relative to the component casting the shadow. 
        The radius basically defines how blurry the shadow appears.
    */
    cardName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 30,
        textShadowColor: 'black',
        textShadowOffset: {
            height: 5,
            width: 5
        },
        textShadowRadius: 3 
    },
    cardOccupationContainer: {
        borderColor: 'black',
        borderBottomWidth: 3
    },
    cardOccupation: {
        fontWeight: 'bold', 
        marginTop: 10,
        marginBottom: 10,
    },
    cardDescription: {
        fontStyle: 'italic', 
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10
    }
});