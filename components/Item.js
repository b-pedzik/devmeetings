import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Item extends React.Component {
    render() {
        return (
            <View style={styles.noteContainer}>
                <Text style={styles.date}>Created date: {this.props.item.createDate}</Text>
                <Text style={styles.content}>{this.props.item.content}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    noteContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFCA33',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10
    },
    content: {
        color: '#000',
        fontSize: 18
    },
    date: {
        color: '#555',
        fontSize: 14,
        paddingTop: 10,
        paddingBottom: 10
    }
});
