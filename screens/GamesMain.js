/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Fonts } from '../src/utils/Fonts';

export default class GamesMain extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      headerRight: (
        <Button onPress={() => {navigation.popToTop()}} title="Home" color="#000" />
      ),
    };
  }

  PressChevronArcade() {
    
  }
  PressChevronPinball() {
    
  }

  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?      
      <ScrollView style={styles.background}> 
        <TouchableHighlight onPress={this.PressChevronPinball} onPress={this.PressChevronPinball} onPress={() => {                  
          this.props.navigation.navigate('PinballList')}}>
          <View style={[styles.container, {backgroundColor: 'whitesmoke', }]}>
            <View style={styles.text}>   
               <Text style={styles.Font}>PINBALL</Text>
            </View>

              <View style={styles.imgcontainer}>
              <Image source={require('../Images/chevron.png')} style={[{width: 40, height: 40}, {flexDirection: 'row'}]}/>
              </View>
            
         </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.PressChevronArcade} onPress={this.PressChevronArcade} onPress={() => {   
          this.props.navigation.navigate('ArcadeList')}}>

          <View style={[styles.container, {backgroundColor: 'whitesmoke', }]}>
            <View style={styles.text}>   
              <Text style={styles.Font}>ARCADE</Text>
            </View>

                <View style={styles.imgcontainer}>
                <Image source={require('../Images//chevron.png')} style={[{width: 40, height: 40}, {flexDirection: 'row'}]}/>
                </View>
          
          </View>
        </TouchableHighlight>
        
       
        </ScrollView> 
      
      
    );
  }
}


const styles = StyleSheet.create({
  
  
  Font: {
    paddingBottom: 5,
    color: '#969696',
    fontSize: 28,
    fontFamily: Fonts.NunitoLight,
  },

  

  container: {
    flex: 1,
    paddingVertical: 10,
    borderWidth: .5,
    borderColor: '#9ca4ab',
    flexDirection: 'row',
   

    
  },
  imgcontainer: {
    justifyContent: 'center',
    width: 240,
    alignItems: 'flex-end'

  },
  text:{
    justifyContent: 'center',
    paddingLeft: 20,

  },
  background:{
    height: 300,
    borderWidth: .5,
    backgroundColor: '#f3f3f3',
    borderColor: '#9ca4ab',
   

  },

    
});


