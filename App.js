import React, { Fragment } from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';

import Routes from './src/navigator';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
