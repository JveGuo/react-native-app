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

import BottomTabs from '@/navigator/bottomTabs';
import DetailPage from '@/pages/detail';

// 堆栈导航参数表
export type RootStackParamList = {
    // 底部导航
    BottomTabs: {
        screen?: string;
    };
    Detail: {
        id: number;
    };
};

export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;

// 创建堆栈式导航
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
                initialRouteName="BottomTabs">
                <Stack.Screen name="BottomTabs" component={BottomTabs} />
                <Stack.Screen name="Detail" component={DetailPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
