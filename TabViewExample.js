import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import MyTabBar from './MyTabBar';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const newWidth = Dimensions.get('window').width * 0.8;
const tabAdjust = newWidth / Dimensions.get('window').width;

export default class App.Example extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'foo', title: 'Foo'},
      {key: 'bar', title: 'Bar'},
      {key: 'baz', title: 'Baz'},
      {key: 'qux', title: 'Qux'},
      {key: 'foob', title: 'Foob'},
      {key: 'barb', title: 'Barb'},
      {key: 'bazb', title: 'Bazb'},
      {key: 'quxb', title: 'Quxb'},
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <MyTabBar {...props} adjustWidth={tabAdjust} scrollEnabled style={{width: '80%'}} layout={{...props.layout, width: newWidth}}
    tabStyle={{padding: 0, width: 100}}/>;

  _renderScene = SceneMap({
    foo: () => <View><Text>Foo</Text></View>,
    bar: () => <View><Text>Bar</Text></View>,
    baz: () => <View><Text>Baz</Text></View>,
    qux: () => <View><Text>Qux</Text></View>,
    foob: () => <View><Text>Foob</Text></View>,
    barb: () => <View><Text>Barb</Text></View>,
    bazb: () => <View><Text>Bazb</Text></View>,
    quxb: () => <View><Text>Quxb</Text></View>,
  });

  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  header: {
    width: 300,
    paddingTop: 20,
  }
});