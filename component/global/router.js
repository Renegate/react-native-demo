import {
    StackNavigator,
} 
from 'react-navigation';
import Home from './component/home';
  
const App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: ({ state }) => `${state.params.name}}`
    }
  }
});