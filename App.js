import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  AppRegistry,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './component/home';
import Profile from './component/profile';
import Messages from './component/messages';
import Book from './component/book';

export const NavApp = StackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
  Messages: { screen: Messages },
  Book: { screen: Book },
});

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  //renderScene(route, navigator) {
  //var { state, actions } = this.props;
  //var routeId = route.id;

  //   //if (routeId === 'home') {
  //     return (
  //       <Home
  //         {...this.props}
  //         userData={route.userData}
  //         navigator={navigator} />
  //     );
  //   //}
  // //   if (routeId === 'messages') {
  // //     return (
  // //       <Messages
  // //         {...this.props}
  // //         userData={route.userData}
  // //         navigator={navigator} />
  // //     );
  // //   }
  // //   if (routeId === 'profile') {
  // //     return (
  // //       <Profile
  // //         {...this.props}
  // //         userData={route.userData}
  // //         navigator={navigator} />
  // //     );
  // //   }
  //}

  render() {
    return (
        // <Home {...this.props} />
        <NavApp {...this.props} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//AppRegistry.registerComponent('NavApp', () => NavApp);