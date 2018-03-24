import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class Item extends React.Component {
    render() {
        return (
            <View style={styles.noteContainer}>
                <Text style={styles.date}>Created date: {this.props.item.createDate}</Text>
                <View style={styles.inputWrapper}>
                    <TextInput 
                        style={styles.content} 
                        placeholderTextColor='#555' 
                        multiline={true}
                        defaultValue={this.props.item.content} />
                </View>
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
    },
    inputWrapper: {
        width: '100%',
        flex: 1,
    }
});
