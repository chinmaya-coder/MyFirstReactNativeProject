import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EmployeeList from '../scenes/EmployeeList';
// import InfiniteScroll from '../scenes/InfiniteScroll';
// import Sample from '../scenes/Sample';
// import Details from '../scenes/Details';

const Stack = createStackNavigator();

class router extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Sample" component={Sample} />
          <Stack.Screen name="Details" component={Details} /> */}
          <Stack.Screen name="EmployeeList" component={EmployeeList} />
          {/* <Stack.Screen name="ListView" component={InfiniteScroll} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default router;
