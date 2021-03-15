import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type RootTabParamList = {
  Home: undefined;
  List: undefined;
  Search: undefined;
  MyFamily: undefined;
  // ItemListScreen: {
  //   selectedCategory: any;
  // };
};

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: RootTabParamList;
  PeopleDetailScreen: undefined;
  // ItemListScreen: {
  //   selectedCategory: any;
  // };
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
export type NavigationTabProp = BottomTabNavigationProp<RootTabParamList>;

// type ItemListScreenRouteProp = RouteProp<RootStackParamList, 'ItemListScreen'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'LoginScreen'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>;
type PeopleDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'PeopleDetailScreen'
>;
type HomeRouteProp = RouteProp<RootTabParamList, 'Home'>;
type ListRouteProp = RouteProp<RootTabParamList, 'List'>;

// export type ItemListScreenProps = {
//   route: ItemListScreenRouteProp;
//   navigation: NavigationProp;
// };

export type LoginScreenProps = {
  route: LoginScreenRouteProp;
  navigation: NavigationProp;
};

export type HomeScreenProps = {
  route: HomeScreenRouteProp;
  navigation: NavigationProp;
};

export type PeopleDetailScreenProps = {
  route: PeopleDetailScreenRouteProp;
  navigation: NavigationProp;
};

export type HomeProps = {
  route: HomeRouteProp;
  navigation: NavigationTabProp;
};

export type ListScreenProps = {
  route: ListRouteProp;
  navigation: NavigationTabProp;
};
