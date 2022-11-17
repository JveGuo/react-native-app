/**
 * @Author: jiawei.guo
 * @Date: 2022-11-13 21:49:37
 * @Description: bottom tabs
 */
import React, { FC, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '@/pages/home';
import ListenPage from '@/pages/listen';
import FoundPage from '@/pages/found';
import AccountPage from '@/pages/account';
import { RootStackNavigation, RootStackParamList } from './index';
import {
    RouteProp,
    TabNavigationState,
    getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { LogBox } from 'react-native';

// 底部导航（有哪些标签）
type BottomTabParamList = {
    Home: undefined;
    Listen: undefined;
    Found: undefined;
    Account: undefined;
};

// 创建底部导航
const Tab = createBottomTabNavigator<BottomTabParamList>();

type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
    state?: TabNavigationState<BottomTabParamList>;
};

interface BottomTabsProps {
    navigation: RootStackNavigation;
    // 接收堆栈式导航中的底部导航参数
    route: Route;
}

// 获取当前点击的标签名, 设置 header
const getHeaderTitle = (route: Route) => {
    // 内置获取当前点击的标签名 (对应 BottomTabParamList)
    const routeName = getFocusedRouteNameFromRoute(route);

    switch (routeName) {
        case 'Home':
            return '首页';
        case 'Listen':
            return '我听';
        case 'Found':
            return '发现';
        case 'Account':
            return '我的';
        default:
            return '首页';
    }
};

const BottomTabs: FC<BottomTabsProps> = ({ navigation, route }) => {
    useEffect(() => {
        // 动态切换 header 显示标签的名称
        navigation.setOptions({
            headerTitle: getHeaderTitle(route),
        });
    }, [navigation, route]);

    useEffect(() => {
        LogBox.ignoreAllLogs();
    }, []);

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

export default BottomTabs;
