import React from 'react';
import { StyleSheet, Text, SectionList, View, TouchableOpacity } from 'react-native';
import { getNotes } from '../utils/db';

export default class List extends React.Component {
  state = {
    items: [],
  };
  
  componentWillMount() {
    setTimeout(() => {
      getNotes().then((items) => {
        this.setState({
          items,
        });
      })
    }, 1000)

  }

  getSections() {
    return this.state.items.map((item) => {
      const date = new Date(item.createDate);
      return `${date.getFullYear()} - ${date.getMonth()}`;
    })
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort()
    .map((section) => {
      return {
        title: section,
        data: this.state.items.filter((item) => {
          const date = new Date(item.createDate);
          const dateString = `${date.getFullYear()} - ${date.getMonth()}`;
          return dateString === section
        })
      };
    });
  }

  onPress = (item) => (event) => {
    this.props.onPress(item);
  }

  render() {
    return (
      <View>
        <SectionList
          sections={this.getSections()}
          renderItem={({item}) => (
            <TouchableOpacity 
                style={styles.item} 
                onPress={this.onPress(item)}>
              <Text style={styles.itemContent} ellipsizeMode="tail" numberOfLines={1}>{item.content}</Text>
              <Text style={styles.itemDate}>{item.createDate}</Text>
            </TouchableOpacity>
          )}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  item: {
    padding: 10,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  itemContent: {
    fontSize: 18,
    height: 25,
  },
  itemDate: {
    fontSize: 12,
    height: 15,
  },
});
