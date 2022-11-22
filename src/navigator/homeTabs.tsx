/**
 * @Author: jiawei.guo
 * @Date: 2022-11-18 13:55:06
 * @Description: 首页 顶部 tabs
 */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomePage from '@/pages/home';

const Tab = createMaterialTopTabNavigator();

const HomeTopTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                lazy: true,
                tabBarScrollEnabled: true,
                tabBarItemStyle: { width: 80, padding: 0 },
                tabBarIndicatorStyle: {
                    height: 4,
                    width: 20,
                    marginLeft: 30,
                    borderRadius: 2,
                    backgroundColor: '#f86442',
                },
                tabBarActiveTintColor: '#f86442',
                tabBarInactiveTintColor: '#333',
                tabBarPressColor: 'transparent',
            }}>
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{ tabBarLabel: '推荐' }}
            />
            {/* <Tab.Screen name="Settings" component={HomePage} />
            <Tab.Screen name="Settings1" component={HomePage} />
            <Tab.Screen name="Settings3" component={HomePage} /> */}
        </Tab.Navigator>
    );
};

export default HomeTopTabs;
