/**
 * @Author: jiawei.guo
 * @Date: 2022-11-18 14:47:44
 * @Description: home state
 */
import { Model } from 'dva-core-ts';
import { Reducer } from 'redux';

export interface HomeState {
    num: number;
}

interface HomeModel extends Model {
    state: HomeState;
    reducers: {
        add: Reducer<HomeState>;
    };
}

// 初始值
const initState: HomeState = {
    num: 0,
};

function delay(timeout: number) {
    return new Promise(resolve => {
        setTimeout(resolve as any, timeout);
    });
}

const homeModel: HomeModel = {
    namespace: 'home',
    state: initState,
    reducers: {
        add(state = initState, { payload }) {
            return {
                ...state,
                num: state.num + payload.num,
            };
        },
    },
    effects: {
        *asyncAdd({ payload }, { call, put }) {
            yield call(delay, 1000);
            yield put({
                type: 'add',
                payload,
            });
        },
    },
};

export default homeModel;
