/**
 * @Author: jiawei.guo
 * @Date: 2022-10-20 14:05:36
 * @Description: detail 页面
 */
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/navigator/index';
import Carousel from '@/components/carousel';

interface DetailProps {
    route: RouteProp<RootStackParamList, 'Detail'>;
}

const DetailPage: FC<DetailProps> = ({ route }) => {
    return (
        <View style={style.container}>
            <Text>Detail Page</Text>
            <Text>{route.params?.id}</Text>
            <Carousel />
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

export default DetailPage;
