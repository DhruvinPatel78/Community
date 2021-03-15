import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import Color from '../common/color/color';
import {RootStackParamList, RootTabParamList} from './PropType';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ListScreen from '../screens/ListScreen/ListScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import color from '../common/color/color';
import SearchSceen from '../screens/SearchScreen/SearchScreen';
import PeopleDetailScreen from '../screens/PeopleDetailScreen/PeopleDetailScreen';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const defaultNavigationOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: Color.whiteColor,
    elevation: 0,
  },
  headerBackTitle: 'Back',
  headerTintColor: Color.secondaryColor,
  headerTitleAlign: 'center',
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'List') {
            iconName = focused ? 'view-list' : 'view-list-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'account-search' : 'account-search-outline';
          } else {
            iconName = focused ? 'person' : 'person-outline';
          }

          if (route.name === 'MyFamily') {
            return <MatIcon name={iconName} size={size} color={color} />;
          } else {
            return <MatComIcon name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: color.primaryColor,
        inactiveTintColor: color.grayColor,
      }}>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'List'} component={ListScreen} />
      <Tab.Screen name={'Search'} component={SearchSceen} />
      <Tab.Screen
        name={'MyFamily'}
        component={HomeScreen}
        options={{tabBarLabel: 'My Family'}}
      />
    </Tab.Navigator>
  );
};

const Navigation: React.FC<any> = (props: any) => {
  console.log(props);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultNavigationOptions}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PeopleDetailScreen"
          component={PeopleDetailScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
