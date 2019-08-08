import React, { Fragment } from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';

import { Home } from './src/index';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ flex: '1' }}>
          <Home />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
