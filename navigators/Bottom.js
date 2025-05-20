import Login from './Screens/Login';
import Home from './Screens/Home';
import Feed from './componentes/feed';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ImageBackgroundComponent } from 'react-native';


export default function bottom() {

    const BottomTab =createBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName='Login'
      screenOptions={{
        headerStyle: { backgroundColor: "orange" },
        headerTintColor: 'white',
        tabBarActiveBackgroundColor: '#FF8C00'
      }}
      >
        <BottomTab.Screen name='Login' component={Login}
        options={{
          tabBarIcon:  () =>
          <AntDesign name="addfile" size={20} color="orange" />
        }}
        />
        <BottomTab.Screen name='Home' component={Home}
        options={{
         tabBarIcon:  ()  => 
         <Feather name="home" size={20} color="orange" />
        }}
        />
        <BottomTab.Screen name='Feed' component={Feed}
        options={{
          tabBarIcon: () => 
            <MaterialIcons name="feed" size={24} color="orange" />
        }}
        />
        
      </BottomTab.Navigator>
    </NavigationContainer>

  );
}
