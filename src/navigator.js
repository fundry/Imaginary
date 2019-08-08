import React from 'react';
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';
import {
  View,
  Text,
  TouchableWithoutFeedback as TouchableOpacity,
  Image,
  Button,
  StyleSheet,
} from 'react-native';
import { Right, Left } from 'native-base';
import Drawer from '../screens/food/one/Drawer';
import { createSwitchNavigator } from 'react-navigation';
import Prefrence from '../screens/prefrences/Prefrence';

const LogoImage = (props) => (
  <Image source={require('./12.jpg')} style={props.style} style={props.style} />
);

class First extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Transition shared="logo">
          <LogoImage style={styles.largeLogo} />
        </Transition>
        <Transition appear="horizontal">
          <Text style={styles.paragraph}>Welcome to UNISPOON !</Text>
        </Transition>
        <Transition appear="horizontal">
          <Button
            title="GET STARTED"
            onPress={() => this.props.navigation.navigate('second')}
          />
        </Transition>
      </View>
    );
  }
}

class Second extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Transition shared="logo">
          <LogoImage style={styles.smallLogo} />
        </Transition>
        <Transition appear="horizontal">
          <View>
            <View>
              <Text style={styles.paragraph}>
                <Text style={{ fontWeight: 'normal' }}>
                  EXPLANATION OF HOW UNISPOON WORKS
                </Text>
              </Text>
            </View>
          </View>
        </Transition>

        <View style={{ flexDirection: 'row', marginHorizontal: 30 }}>
          <Left>
            <Transition appear="horizontal">
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 17 }}>BACK</Text>
                </View>
              </TouchableOpacity>
            </Transition>
          </Left>

          <Right>
            <Transition appear="horizontal">
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('next')}
              >
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
                    {' '}
                    DONE
                  </Text>
                </View>
              </TouchableOpacity>
            </Transition>
          </Right>
        </View>
      </View>
    );
  }
}

const RootStack = FluidNavigator(
  {
    first: { screen: First },

    second: { screen: Second },

    prefrence: { screen: Prefrence },
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);

const Next = createSwitchNavigator(
  {
    //default screen upon load
    one: { screen: RootStack },

    next: { screen: Drawer },
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);

class Routes extends React.Component {
  render() {
    return <Next />;
  }
}
export default Routes;
//  ==================

const styles = StyleSheet.create({
  avatar: {
    marginLeft: 40,
    height: 150,
    width: 150,
    borderRadius: 75,
    marginTop: 20,
  },
  box: {
    width: '100%',
    height: '65%',
    backgroundColor: 'blue',
  },

  navBox: {
    width: '100%',
    height: '35%',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1',
  },
  largeLogo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  smallLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  paragraph: {
    margin: 24,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
