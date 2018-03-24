import React from 'react';
import { StyleSheet, Text, SectionList, View, TouchableOpacity } from 'react-native';
import { getNotes, events } from '../utils/db';
import moment from 'moment';

function pad(n){return n<10 ? '0'+n : n}

export default class List extends React.Component {
  state = {
    items: [],
  };

  componentWillMount() {
    events.on('newData', this.updateItems)
  }

  updateItems = () => {
    getNotes().then((items) => {
      this.setState({
        items,
      });
    })
  }

  componentWillUnmount() {
    events.off('newData', this.updateItems)
  }

  getSections() {
    const sections = {
      today: [],
      yesterday: [],
      week: [],
      months: {},
    };

    this.state.items.forEach((item) => {
      const itemData = moment(item.createDate);
      const currentDate = moment(new Date());

      if (itemData.isAfter(currentDate.startOf('day'))) {
        sections.today.push(item);
        return;
      }
      if (itemData.isAfter(currentDate.startOf('day').add(1, 'd'))) {
        sections.yesterday.push(item);
        return;
      }
      if (itemData.isAfter(currentDate.startOf('week'))) {
        sections.week.push(item);
        return;
      }

      const year = itemData.year();
      const month = pad(itemData.month() + 1, 2);
      if (!sections.months[`${year} - ${month}`]) sections.months[`${year} - ${month}`] = [];
      sections.months[`${year} - ${month}`].push(item);
    });

    const data = [];

    if (sections.today.length) {
      data.push({
        title: 'dziś...',
        data: sections.today,
      });
    }

    if (sections.yesterday.length) {
      data.push({
        title: 'wczoraj...',
        data: sections.yesterday,
      });
    }

    if (sections.week.length) {
      data.push({
        title: 'w tym tygodniu...',
        data: sections.week,
      });
    }

    Object.keys(sections.months).sort((a, b) => {
      var dateA = moment(a || '10000 - 01', 'YYYY - MM');
      var dateB = moment(b || '10000 - 01', 'YYYY - MM');
      return dateB.diff(dateA);
    }).forEach((month) => {
      if (!sections.months[month].length) return;
      data.push({
        title: month,
        data: sections.months[month],
      });
    });

    return data;
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
