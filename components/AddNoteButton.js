import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default class AddNoteButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.addItem} style={styles.button}>
                <Ionicons {...iconProps} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 16,
        right: 16
    }
});

const iconProps = {
    name: 'md-add-circle',
    size: 64,
    color: '#FFCA33'
}
