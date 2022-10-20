/**
 * @Author: jiawei.guo
 * @Date: 2022-10-20 14:08:04
 * @Description: 导航
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import HomePage from '@/pages/home';
import DetailPage from '@/pages/detail';

// 堆栈导航参数表
export type RootStackParamList = {
    Home: undefined;
    Detail: {
        id: number;
    };
};

export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    // 切换页面头部动画
                    animation: 'slide_from_right',
                    presentation: 'card',
                    // 左滑返回
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#40a9ff' },
                    headerTitleAlign: 'center', // 头部标题 居中 显示
                }}
                initialRouteName="Home">
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Detail" component={DetailPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
