import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


import Login from './Screens/Login';
import Home from './Screens/Home';
import Feed from './componentes/feed';
import Count from './Screens/count';
import Product from './Screens/product';
import Cadastrar from './Screens/cadastrar';

 function Tab() {
  const BottomTab = createBottomTabNavigator();
  return(
    <BottomTab.Navigator>
      <BottomTab.Screen name='hometab' component={Home} />
      <BottomTab.Screen name='feedtab' component={Feed} />
      <BottomTab.Screen name='Contab' component={Count} />
      <BottomTab.Screen name='Produtotab' component={Product}/>
      </BottomTab.Navigator>
  )
}

export default function App() {

  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Telalogin' component={Login}/>
      <Stack.Screen name='TelaCadastros' component={Cadastrar}/>
      <Stack.Screen options={{headerShown:false}} name='Home' component={Tab}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

