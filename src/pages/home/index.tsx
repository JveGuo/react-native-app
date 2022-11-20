/**
 * @Author: jiawei.guo
 * @Date: 2022-10-20 14:05:36
 * @Description: home 页面
 */
import React, { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackNavigation } from '@/navigator/index';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '@/model/index';

const mapStateToProps = ({ home, loading }: RootState) => ({
    stateNum: home.num,
    loading: loading.effects['home/asyncAdd'],
});

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface HomeProps extends ModelState {
    navigation: RootStackNavigation;
}

const HomePage: FC<HomeProps> = ({
    navigation,
    stateNum,
    loading,
    dispatch,
}) => {
    // 跳转详情页面
    const goDetail = () => {
        navigation.navigate('Detail', { id: 1000 });
    };

    const handleAdd = () => {
        dispatch({
            type: 'home/add',
            payload: {
                num: 10,
            },
        });
    };

    const handleAsyncAdd = () => {
        dispatch({
            type: 'home/asyncAdd',
            payload: {
                num: 100,
            },
        });
    };

    return (
        <View style={style.container}>
            <Text>Home Page</Text>
            <Text>redux: {stateNum}</Text>
            <Text>{loading ? '正在努力计算中...' : ''}</Text>
            <Button title="add" onPress={handleAdd} />
            <Button title="asyncAdd" onPress={handleAsyncAdd} />
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

export default connector(HomePage);
