import React, {Component} from 'react';
import {Text, View, ScrollView, Image, Button} from 'react-native';

import styles from './styles';

export default class VerticalCard extends Component {
  render() {
    return (
      <View style={styles.Card}>

        <View style={styles.Circle}>
          <Image source={this.props.ImgURI} />
        </View>
        
        <View style={styles.GeneralInfo}>

          <View style={styles.TitleView}>
            <Text style={styles.Title}>{this.props.Title}</Text>
          </View>

          <View style={styles.PainelInfo}> 

            <Image source={require('../../../img/e.png')} />
            <Text style={styles.PainelInfoText}> {this.props.Kcal}   </Text>  

            <Image source={require('../../../img/ic_time.png')}  style={styles.PainelInfoImgs} />
            <Text style={styles.PainelInfoText} >{this.props.Time}   </Text>  

            <Image source={require('../../../img/ic_balance.png') } style={styles.PainelInfoImgs}/>
            <Text style={styles.PainelInfoTextWithoutLine}> 52 kg  </Text>  

          </View>

            <View style={this.props.BackgroundToday}> 
              <Text style={styles.Text}>HOJE</Text>
            </View>

            <View style={this.props.BackgroundYesterday}> 
              <Text style={styles.Text}>ONTEM</Text>
            </View>

          </View>
        </View>
    );
  }
}
