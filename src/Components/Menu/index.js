import React, { Component } from 'react';
import { View, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default class Menu extends Component {
  render() {
    return (

      <View style={styles.ContentMain}>
        
        <View style={styles.BackgroundMenu}>
        </View>

        <View style={{left:-25, position: "absolute", width: "100%"}}>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator ={false}>

          <LinearGradient 
              colors={["#7F38F4", "#F22B48"]} 
              style={styles.Tabs}
              start={{x: 0.0, y: 0.25}} 
              end={{x: 0.5, y: 2.0}}
              locations={[0,0.6]}>
            <Image 
              source={require('../../../img/ic_yoga.png')}
            />
          </LinearGradient>

          <LinearGradient  
              colors={["#7F38F4", "#F22B48"]} 
              style={styles.Tabs}
              start={{x: 0.0, y: 0.25}} 
              end={{x: 0.5, y: 2.0}}
              locations={[0,0.6]}>
            <Image 
                  source={require('../../../img/ic_upper_body.png')}
                />
          </LinearGradient>

            <LinearGradient  
              colors={["#7F38F4", "#F22B48"]} 
              style={styles.Tabs}
              start={{x: 0.0, y: 0.25}} 
              end={{x: 0.5, y: 2.0}}
              locations={[0,0.6]}>
            <Image 
              source={require('../../../img/ic_lower_body.png')}
                />
            </LinearGradient>

            <LinearGradient  
              colors={["#7F38F4", "#F22B48"]} 
              style={styles.Tabs}
              start={{x: 0.0, y: 0.25}} 
              end={{x: 0.5, y: 2.0}}
              locations={[0,0.6]}>
            <Image 
              source={require('../../../img/ic_dance.png')}
                />
            </LinearGradient>

            <LinearGradient   
              colors={["#7F38F4", "#F22B48"]} 
              style={styles.Tabs}
              start={{x: 0.0, y: 0.25}} 
              end={{x: 0.5, y: 2.0}}
              locations={[0,0.6]}>
            <Image 
              source={require('../../../img/ic_yoga.png')}
                />
            </LinearGradient>

            <LinearGradient  
              colors={["#7F38F4", "#F22B48"]} 
              style={styles.Tabs}
              start={{x: 0.0, y: 0.25}} 
              end={{x: 0.5, y: 2.0}}
              locations={[0,0.6]}>
            <Image 
              source={require('../../../img/ic_lower_body.png')}
                />
            </LinearGradient>
          </ScrollView>
        </View>
      </View>           
    );
  }
}
