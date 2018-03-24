import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Item from './components/Item';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar style={styles.statusBar} />
                <Item />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: 'blue'
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
});


