/**
 * @Author: jiawei.guo
 * @Date: 2022-11-20 22:07:03
 * @Description: 视图相关
 */
import { Dimensions } from 'react-native';

// 视图宽、高
const { width: viewportWidth, height: viewportHeight } =
    Dimensions.get('window');

// 获取百分比宽度尺寸
const widthPercent = (percent: number) => {
    const val = (percent / 100) * viewportWidth;
    return Math.round(val);
};

// 获取百分比高度尺寸
const heightPercent = (percent: number) => {
    const val = (percent / 100) * viewportHeight;
    return Math.round(val);
};

export { viewportWidth, viewportHeight, widthPercent, heightPercent };
