import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            elevation: 0,
            shadowOpacity: 0,
            height: 48,
          },
          tabStyle: {
            alignItems: "center",
            justifyContent: "center",
          },
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20,
            marginTop: 10,
          },
          inactiveBackgroundColor: "#fff",
          activeBackgroundColor: "#fff",
          inactiveTintColor: "#333",
          activeTintColor: "#333",
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Feather
                  name="home"
                  size={size}
                  color={focused ? "red" : color}
                />
              );
            },
            title: "",
          }}
        />
        <Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Feather
                  name="search"
                  size={size}
                  color={focused ? "red" : color}
                />
              );
            },
            title: "",
          }}
        />
        <Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Feather
                  name="heart"
                  size={size}
                  color={focused ? "red" : color}
                />
              );
            },
            title: "",
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
