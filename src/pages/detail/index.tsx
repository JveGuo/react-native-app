/**
 * @Author: jiawei.guo
 * @Date: 2022-10-20 14:05:36
 * @Description: detail 页面
 */
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/navigator/index';

interface DetailProps {
    route: RouteProp<RootStackParamList, 'Detail'>;
}

const DetailPage: FC<DetailProps> = ({ route }) => {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail</Text>
            <Text>{route.params?.id}</Text>
        </View>
    );
};

export default DetailPage;
