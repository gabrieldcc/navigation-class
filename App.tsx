// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
// import HomeScreen from "./src/screens/HomeScreen";
// import DetailsScreen from "./src/screens/DetailsScreen";

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen 
//           name="Main" 
//           component={MainTabs} 
//           options={{ headerShown: false }} 
//         />
//         <Stack.Screen 
//           name="Details" 
//           component={DetailsScreen} 
//           options={{ headerShown: true }} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// function MainTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen 
//         name="HomeStack" 
//         component={HomeStack} 
//         options={{ title: "Home", headerShown: false }} 
//       />
//       <Tab.Screen name="Details" component={DetailsScreen} />
//     </Tab.Navigator>
//   );
// }

// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//         name="Home" 
//         component={HomeScreen} 
//         options={{ headerShown: true }} 
//       />
//       <Stack.Screen 
//         name="Details" 
//         component={DetailsScreen} 
//         options={{ tabBarStyle: { display: "none" } }} 
//       />
//     </Stack.Navigator>
//   );
// }

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();  

const linking = {
  prefixes: ['myapp://'], 
  config: {
    screens: {
      Home: '',
      Details: 'details/:itemId', 
    },
  },
};


// Função principal do App
export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Drawer.Navigator initialRouteName="HomeTabs">
        <Drawer.Screen name="HomeTabs" component={HomeTabs} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Navegação das Tabs
function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Details" component={DetailsScreen} options={{ tabBarVisible: false }} />
    </Tab.Navigator>
  );
}

// Navegação Stack dentro da Home
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: true }}
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{ 
          title: "Detalhes",
          headerShown: true, 
        }}
      />
    </Stack.Navigator>
  );
}

