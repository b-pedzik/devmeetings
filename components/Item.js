import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class Item extends React.Component {
    state = {
        inputValue: ''
    }
    
    onChange = value => {
        this.setState({
            inputValue: value
        });
    }
    
    addNote = () => {
        const item = {
            ...this.props.item,
            content: this.state.inputValue
        }
        
        this.props.addNote(item);
    }
    
    render() {
        return (
            <View style={styles.noteContainer}>
                <View style={styles.inputWrapper}>
                    <TextInput 
                        style={styles.content} 
                        placeholderTextColor='#777' 
                        placeholder="Add new note..."
                        multiline={true}
                        defaultValue={this.props.item.content}
                        underlineColorAndroid='transparent'
                        onChangeText={this.onChange}
                    />
                        <View style={styles.saveButtonWrapper}>
                            <TouchableOpacity onPress={this.addNote}>
                                <MaterialIcons name="save" size={48} color='#000' />
                            </TouchableOpacity>
                        </View>
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
        position: 'relative'
    },
    saveButtonWrapper: {
        position: 'absolute',
        bottom: 12,
        right: 12
    }
});
