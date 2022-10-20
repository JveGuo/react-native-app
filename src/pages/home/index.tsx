/**
 * @Author: jiawei.guo
 * @Date: 2022-10-20 14:05:36
 * @Description: home 页面
 */
import React, { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackNavigation } from '@/navigator/index';

interface HomeProps {
    navigation: RootStackNavigation;
}

const HomePage: FC<HomeProps> = ({ navigation }) => {
    const goDetail = () => {
        navigation.navigate('Detail', { id: 100 });
    };

    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
            <Button title="跳转到详情页" onPress={goDetail} />
        </View>
    );
};

export default HomePage;
