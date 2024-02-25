import { combineReducers } from 'redux';
import todoReducer from './todoReducer'; // 你需要创建todoReducer来处理Todo相关的状态

// 将所有的Reducer合并成一个根Reducer
const rootReducer = combineReducers({
    todos: todoReducer, // 这里的'todos'是你在Redux store中访问Todo状态的键名
    // 如果你有其他的Reducer，可以继续添加在这里
});

export default rootReducer;
