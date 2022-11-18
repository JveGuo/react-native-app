/**
 * @Author: jiawei.guo
 * @Date: 2022-11-18 14:17:52
 * @Description: dva
 */
import { create } from 'dva-core-ts';
import createLoading from 'dva-loading-ts';
import models from '@/model/index';

// 1.创建实例
const app = create();

// 2.加载 model 对象
models.forEach(model => {
    app.model(model);
});

// 使用 dva-loading
app.use(createLoading());

// 3.启动 dva
app.start();

// 4.导出 dva 的数据
export default app._store;
