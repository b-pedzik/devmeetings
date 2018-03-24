import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Item extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.text}>{note}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: 25,
        backgroundColor: '#FFCA33',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    text: {
        color: '#000',
        fontSize: 20
  }
});

const note = 'Note';