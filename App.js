
import React from 'react'
import { StyleSheet, View, StatusBar, SafeAreaView, TouchableOpacity, Text, Image, Dimensions, Platform, AsyncStorage,TouchableWithoutFeedback } from 'react-native'
import { Provider } from 'react-redux'
import ReduxNavigation from './src/Navigator/Navigator'

import createStore from './src/Reducer/index.js'
import store from './src/Reducer/index.js'

const { width, height } = Dimensions.get("window");

export default class App extends React.Component {
  constructor(props) {
    super(props);

    }

  componentWillUnmount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ReduxNavigation />
        </View>
      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
});
