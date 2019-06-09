import React, {Component} from 'react';
import { View } from 'react-native';

import Header from '../Components/Header';
import Menu from '../Components/Menu';
import VerticalCard from '../Components/VerticalCard';

import styles from './styles';

import data from '../../data.json';


export default class Main extends Component {
    render() {
    return (
      <View style={styles.container}>
        <Header />
        <Menu />
        <VerticalCard />
          
      </View>
    );
  }
}
