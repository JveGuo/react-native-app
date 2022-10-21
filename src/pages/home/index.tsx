/**
 * @Author: jiawei.guo
 * @Date: 2022-10-20 14:05:36
 * @Description: home 页面
 */
import React, { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackNavigation } from '@/navigator/index';

interface HomeProps {
    navigation: RootStackNavigation;
}

const HomePage: FC<HomeProps> = ({ navigation }) => {
    // 跳转详情页面
    const goDetail = () => {
        navigation.navigate('Detail', { id: 1000 });
    };

    return (
        <View style={style.container}>
            <Text>Home Page</Text>
            <Button title="跳转到详情页" onPress={goDetail} />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomePage;
