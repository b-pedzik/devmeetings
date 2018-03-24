import React from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar, SectionList } from 'react-native';

export default class List extends React.Component {
  state = {
    items: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Morbi erat turpis, faucibus at imperdiet dapibus, gravida ac mi.',
      'Suspendisse quis mi in ex elementum fermentum.',
      'Proin tempor dictum arcu.',
      'Donec ut mi suscipit, dignissim ipsum eget, lobortis magna.',
      'Fusce tincidunt aliquam orci non tempus.',
      'Quisque sollicitudin ornare purus, et venenatis ipsum congue ut.',
      'Donec in volutpat dolor.',
      'Cras non sem ut enim rhoncus pellentesque.',
      'In ultricies tellus et efficitur faucibus.',
      'Mauris ut erat in odio molestie tincidunt.',
      'Duis pharetra ex eros, eu tempus elit hendrerit eget.',
      'Vestibulum at posuere diam, ut dapibus tortor.',
      'Morbi fringilla odio vitae pretium lacinia.',
      'Sed mattis mattis augue et accumsan.',
      'Nulla facilisi.',
      'Praesent vel sapien ex.',
      'Donec a orci tristique dui tempus placerat id sit amet est.',
      'Nunc id elementum eros.',
      'Nunc sit amet ipsum rutrum, rhoncus est a, convallis ligula.',
      'Praesent hendrerit mi ac turpis lacinia euismod.',
      'Phasellus fringilla lacus sed efficitur auctor.',
      'Nullam ac elit at quam dictum hendrerit.',
      'Mauris ac scelerisque tortor.',
      'Proin at interdum ipsum.',
      'Praesent eget lorem eu dui rutrum varius sit amet at ligula.',
      'Curabitur dignissim malesuada erat, at efficitur eros hendrerit ornare.',
      'Sed vitae molestie ipsum, at scelerisque nisl.',
      'Sed posuere nulla vel nunc varius, nec condimentum odio suscipit.',
      'Aliquam erat volutpat.',
      'Praesent aliquam, libero rutrum mattis tristique, dui velit tempor lacus, vitae dapibus eros ex eget sapien.',
      'Nullam risus purus, malesuada in faucibus sit amet, iaculis at tellus.',
      'Proin bibendum arcu vel lobortis finibus.',
      'Aliquam elementum convallis fermentum.',
      'Aliquam vel posuere urna.',
      'Donec congue, velit ut porta pellentesque, sem nunc laoreet sem, sit amet tincidunt est mauris sit amet felis.',
      'Cras volutpat lacus id mollis fermentum.',
      'Morbi ut aliquam tortor.',
      'Nulla facilisi.',
      'Fusce condimentum eget tortor sed volutpat.',
      'Sed venenatis tellus sapien, et aliquet augue placerat vel.',
      'Nunc egestas finibus metus, id iaculis nisi tempor commodo.',
      'Maecenas fringilla lectus dolor, eu accumsan ipsum vehicula non.',
      'Pellentesque eget suscipit mi.',
      'Donec ultricies augue urna, vitae pretium tellus pulvinar a.',
      'Donec sed arcu suscipit, varius nibh nec, elementum est.',
      'Aenean eu feugiat dui, eu molestie ligula.',
      'Suspendisse faucibus porttitor luctus.',
      'Proin condimentum felis a lectus dignissim, in vestibulum magna maximus.',
      'Maecenas at convallis ligula.',
      'Cras quis efficitur ante.',
      'Ut ante est, viverra sit amet consequat nec, varius nec enim.',
      'Suspendisse at tincidunt enim.',
      'Nullam nisi quam, aliquam vitae rutrum ut, bibendum vel orci.',
      'Duis sagittis tristique odio et elementum.',
      'Duis vitae vulputate metus.',
      'Vivamus scelerisque, dolor quis faucibus laoreet, est tortor gravida velit, sed viverra nulla lectus ut turpis.',
      'Suspendisse nec ex feugiat, aliquet dui nec, lacinia nibh.',
      'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      'Vestibulum leo arcu, luctus et mauris at, feugiat molestie leo.',
      'Nulla sit amet quam id ligula porta commodo lacinia eget augue.',
    ]
  };

  getSections() {
    return this.state.items.map((item) => {
      return item.substring(0, 1);
    })
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort()
    .map((letter) => ({
      title: letter.toUpperCase(),
      data: this.state.items.filter((item) => item.substring(0, 1).toLowerCase() === letter.toLowerCase()),
    }));
  }

  render() {
    return (
      <View>
        <SectionList
          sections={this.getSections()}
          renderItem={({item}) => <Text style={styles.item} ellipsizeMode="tail" numberOfLines={1}>{item}</Text>}
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
    fontSize: 18,
    height: 44,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
});
