import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import List from './components/List';
import Item from './components/Item';
import AddNoteButton from './components/AddNoteButton';

export default class App extends React.Component {
    state = {
        item: {
            "isDone": true,
            "content": "Consectetur laboris enim eu tempor. Nostrud aliquip sunt ad pariatur voluptate esse officia ut. Id irure ut est cillum aliqua velit esse ad ex.\r\n",
            "createDate": "2015-03-28T10:00:53 -01:00",
            "lastUpdate": "2016-08-18T03:43:45 -02:00"
        }
    }
    
    selectItem = item => {
        this.setState({ item });
    }
    
    addItem = () => {
        
    }
    
    
    
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <Item item={this.state.item} />
                </View>
                <View style={styles.container}>
                    <List onPress={this.selectItem}/>
                </View>
                <AddNoteButton onPress={this.addItem} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#000',
        marginTop: 25,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    container: {
        flex: 1,
        marginTop: 2,
        height: '50%',
        backgroundColor: '#000',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
});


