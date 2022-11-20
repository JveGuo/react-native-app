/**
 * @Author: jiawei.guo
 * @Date: 2022-10-20 11:20:06
 * @Description: 首页
 */
import React from 'react';
import Navigator from '@/navigator/index';
import { Provider } from 'react-redux';
import store from '@/config/dva';
import { StatusBar } from 'react-native';

const Index = () => {
    return (
        <Provider store={store}>
            <Navigator />
            <StatusBar
                backgroundColor={'transparent'}
                barStyle="dark-content"
                translucent
            />
        </Provider>
    );
};

export default Index;
