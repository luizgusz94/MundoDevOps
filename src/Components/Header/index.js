import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import styles from './styles';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.ContentMain}>
          <View style={styles.ContentItems}>
            <Icon name="three-bars" size={28} style={styles.IconsParameters}/>  
            <Text style={styles.Title}> MEU PERFIL </Text>
            <Icon name="gear" size={24} color="#FFF" style={styles.IconsParameters}/>  
          </View>
      </View>
    );
  }
}



