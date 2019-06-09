import React, {Component} from 'react';
import {Text, View, ScrollView, Image, Button} from 'react-native';
import CardView from './CardView';

import styles from './styles';

export default class VerticalCard extends Component {
  render() {
    return (
      <View style={styles.ContentMain}>


<ScrollView scrollEventThrottle={16} style={{width:"100%", height:999}}>

        <View style={{width: "100%", height:900}}> 
 
          <ScrollView vertical="true" style={{left:"5%",  width:"100%", alignContent:"center",  }}>

              <CardView 
                ImgURI={require('../../../img/running.png')}
                BackgroundToday={styles.TodayNormal}
                BackgroundYesterday={styles.YesterdayNormal}
                Title="CORRIDA"
                Kcal="400 Kcal" 
                Time="30 m" 
                />

                <CardView 
                ImgURI={require('../../../img/cycling.png')}
                BackgroundToday={styles.TodayOrange}
                BackgroundYesterday={styles.YesterdayNormal}
                Title="BICICLETA"
                Kcal="630 Kcal" 
                Time="40 m" 
                />

                <CardView 
                ImgURI={require('../../../img/gym.png')}
                BackgroundToday={styles.TodayNormal}
                BackgroundYesterday={styles.YesterdayNormal}
                Title="MUSCULAÇÃO"
                Kcal="950 Kcal" 
                Time="1h" 
                />

                <CardView        
               
                ImgURI={require('../../../img/yoga.png')}
                BackgroundToday={styles.TodayNormal}
                BackgroundYesterday={styles.YesterdayGreen}
                Title="YOGA"
                Kcal="400 Kcal" 
                Time="80 m" 
                />

            </ScrollView>
         </View>
         
      </ScrollView>
      </View>
    );
  }
}

