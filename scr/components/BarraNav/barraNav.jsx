import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../../Home';
import SecondScreen from '../../screens/SecondScreen';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={SecondScreen} />
    </Tab.Navigator>
  );
}