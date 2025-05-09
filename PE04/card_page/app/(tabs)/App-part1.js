// PE04 - Card Page
// Reference: Code was based on Listing 4.14 Modifying Profile Card styles to fix the layout

import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

/*
    https://icons8.com/icons/set/user
*/
export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image
                            style={styles.cardImage}
                            source={require('./assets/user.png')}
                        />
                    </View>
                    <Text style={styles.cardName}>Mitch Fade</Text>
                    <Text style={styles.cardTitle}>Python Developer</Text>
                    <Text style={styles.cardDescription}>
                        Mitch mostly develops backend applications written in Python on satellite ground station servers in the arctic.
                    </Text>
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
        alignItems: 'center',
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        padding: 20
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 10,
        paddingTop: 15
    },
    cardImage: {
        width: 80,
        height: 80,
    },
    cardName: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        marginVertical: 5,
    },
    cardDescription: {
        marginTop: 10,
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
        paddingHorizontal: 10,
    },
});