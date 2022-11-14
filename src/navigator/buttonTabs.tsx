/**
 * @Author: jiawei.guo
 * @Date: 2022-11-13 21:49:37
 * @Description: bottom tabs
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '@/pages/home';
import ListenPage from '@/pages/listen';
import FoundPage from '@/pages/found';
import AccountPage from '@/pages/account';

type BottomTabParamList = {
    Home: undefined;
    Listen: undefined;
    Found: undefined;
    Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const ButtonTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#f86442',
                headerShown: false,
            }}>
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    tabBarLabel: '首页',
                }}
            />
            <Tab.Screen
                name="Listen"
                component={ListenPage}
                options={{
                    tabBarLabel: '我听',
                }}
            />
            <Tab.Screen
                name="Found"
                component={FoundPage}
                options={{
                    tabBarLabel: '发现',
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountPage}
                options={{
                    tabBarLabel: '我的',
                }}
            />
        </Tab.Navigator>
    );
};

export default ButtonTabs;
