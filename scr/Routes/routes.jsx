import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import TerceiraRota from "../screens/TerceiraScreen";
import {Foundation, Octicons, FontAwesome, AntDesign, Ionicons} from  '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const Routes= () => {
    return (
      <Tab.Navigator
      screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle:{
            position:'absolute',
            backgroundColor:'rgba(0,0,0,0.7)',
            borderTopWidth: 0,
            elevation:0,

            bottom: 8,
            left:0,
            right:0,
            bottom:0
        }
      }}
      >
        <Tab.Screen     
        name="Home"
        component={Home}
        options={{
            headerShown:false,
            tabBarIcon:({color, size, focused})=>{
                if(focused){
                    return<Foundation name="home" size={30} color="black"/>
                }

                return<Octicons name="home" size={26} color="black" />
            }
        }}
        />
        <Tab.Screen name="Search" component={SecondScreen}
        options={{
            headerShown:false,
            tabBarIcon:({color, size, focused})=>{
                if(focused){
                    return<FontAwesome name="search" size={24} color="black" />
                }

                return<AntDesign name="search1" size={24} color="black" />
            }
        }}
        
        />
        <Tab.Screen name="Profile" component={TerceiraRota}
        options={{
            headerShown:false,
            tabBarIcon:({color, size, focused})=>{
                if(focused){
                    return<Ionicons name="ios-library" size={24} color="black" />
                }

                return<Ionicons name="ios-library-outline" size={24} color="black" />
            }
        }}
               
        />
      </Tab.Navigator>
    );
  };

  export default Routes;

