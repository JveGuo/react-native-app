/**
 * @Author: jiawei.guo
 * @Date: 2022-11-13 21:49:37
 * @Description: button tabs
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomePage} />
                <Tab.Screen name="Listen" component={ListenPage} />
                <Tab.Screen name="Found" component={FoundPage} />
                <Tab.Screen name="Account" component={AccountPage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default ButtonTabs;
