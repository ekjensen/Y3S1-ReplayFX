import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import ScheduleScreen from './ScheduleScreen';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import AdjustableTabBar from '../util/AdjustableTabBar';

const tabs = [
  { key: 'thur', title: `THUR\n26` },
  { key: 'fri', title: `FRI\n27` },
  { key: 'sat', title: `SAT\n28` },
  { key: 'sun', title: `SUN\n28` },
  { key: 'my-schedule', title: `MY\nSCHEDULE` },
  { key: 'featured', title: `FEATURED` },
  { key: 'open-play', title: `OPEN\nPLAY` },
  { key: 'compete', title: `COMPETE` },
  { key: 'live-music', title: `LIVE\nMUSIC` },
  { key: 'seminars', title: `SEMINARS` },
  { key: 'vendors', title: `VENDORS` },
];

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class ScheduleScreenContainer extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params, routeName } = navigation.state;
  
      //TODO: default filter to current/first day (thur/fri/sat)?
      // let filter = 'my-schedule';

      // if (params) {
      //   filter = params.scheduleFilter;
      // } 

      // navigation.setParams({scheduleFilter: filter});

      return {
        headerRight: (
          <Button onPress={() => {navigation.popToTop()}} title="Home" color="#000" />
        ),
      };
    }

    
    constructor(props) {
      super(props);
  
      const { params } = this.props.navigation.state;

      

      let filter = '';
      if (params && params.scheduleFilter) {
        filter = params.scheduleFilter;
      }

      filter = this._getFilter(filter);

      //get index based on passed-in filter
      const index = this._getIndexFromFilter(filter);

      const adjustedTabBarWidth = Dimensions.get('window').width * 0.8;
      const tabAdjustFactor = adjustedTabBarWidth / Dimensions.get('window').width;

      this.state = {
        filter: filter,
        tabBarWidth: adjustedTabBarWidth,
        tabAdjustFactor: tabAdjustFactor,
        index: index,
        routes: tabs,
      };

      this.updateFilter = this.updateFilter.bind(this);
    }

    

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => {
    
      return (
        <View style={{flexDirection:'row', height:'10%', borderStyle: 'solid', borderColor: 'white', borderTopWidth: (StyleSheet.hairlineWidth*1), borderBottomWidth: (StyleSheet.hairlineWidth * 2)}}>
            
          <View style={{width: '20%', alignItems:'center', justifyContent:'center', backgroundColor: '#272727'}}>
            <Text style={{fontSize: 24, color:'white'}}>JULY</Text>
          </View>

          <AdjustableTabBar {...props} 
            adjustWidth={this.state.tabAdjustFactor} 
            scrollEnabled 
            style={{elevation: 0, alignItems:'flex-start', justifyContent:'flex-start', backgroundColor:'#272727', padding: 0, margin: 0, width: this.state.tabBarWidth}} 
            layout={{...props.layout, width: this.state.tabBarWidth}}
            tabStyle={[styles.tab, {width: 100, alignItems:'center', justifyContent:'center', backgroundColor: '#272727'}]}
            labelStyle={{color:'white', textAlign:'center'}}
          />
        </View>
      );
    }

    _renderScene = ({ route }) => {
        // if (Math.abs(this.state.index - this.state.routes.indexOf(route)) > 2) {
        //   return null;
        // }

        const scene = <ScheduleScreen parentIndex={this.state.index} filter={route.key} updateFilter={this.updateFilter} navigation={this.props.navigation} />

        return scene;
      }

    _getFilter(newFilter) {
      let filter = newFilter;
      if (newFilter == '' || newFilter == 'schedule') {
        filter = 'fri';
      }
      return filter;
    }

    _getIndexFromFilter(filter) {
      return tabs.findIndex((tab) => tab.key == filter);
    }

    updateFilter(newFilter) {
      const filter = this._getFilter(newFilter);
      this.setState({filter: filter, index: this._getIndexFromFilter(filter)});
    }
  
    render() {
      return (
        <View style={{flex:1}}>          
          <TabViewAnimated
            navigationState={this.state}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onIndexChange={this._handleIndexChange}
            initialLayout={initialLayout}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    tab: {
      //flex: 1, padding: 4, paddingHorizontal: 15
      padding: 0, paddingHorizontal: 0
    },
  });