import { createSlice } from '@reduxjs/toolkit'; // 导入createSlice

const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos(state, action) {
            state.todos = action.payload; // 设置Todo项的列表
        },
        // 其他reducer可以在这里添加
        editTodo(state, action) {
            const { id, newText, newDate, newTime } = action.payload;
            const index = state.todos.findIndex(todo => todo.id === id);
            if (index !== -1) {
                state.todos[index].text = newText;
                state.todos[index].date = newDate;
                state.todos[index].time = newTime;
            }
        },
    },
});

export const { setTodos } = todoSlice.actions;
export default todoSlice.reducer;

