import { createAsyncThunk } from '@reduxjs/toolkit'; // 导入createAsyncThunk
import { addTask, deleteTask, editTask, getTasks, toggleTaskCompletion } from '../../utils/db'; // 导入Prisma的数据库操作函数
// import { setTodos } from './reducers/todoReducer'; // 导入设置Todo状态的action creator

// 使用createAsyncThunk创建异步action creator，用于从Prisma中获取Todo列表并将其设置到Redux store中
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    try {
        const tasks = await getTasks(); // 从Prisma获取Todo列表
        return tasks; // 返回获取的Todo列表
    } catch (error) {
        throw error; // 抛出错误
    }
});

// 使用createAsyncThunk创建异步action creator，用于向Prisma中添加Todo并更新Redux store中的状态
export const addTodo = createAsyncThunk('todos/addTodo', async (todoData) => {
    try {
        const { text, date, time } = todoData;
        const newTask = await addTask(text, date, time); // 向Prisma添加Todo
        return newTask; // 返回新添加的Todo
    } catch (error) {
        throw error; // 抛出错误
    }
});

// 使用createAsyncThunk创建异步action creator，用于从Prisma中删除Todo并更新Redux store中的状态
export const removeTodo = createAsyncThunk('todos/removeTodo', async (id) => {
    try {
        await deleteTask(id); // 从Prisma删除Todo
        return id; // 返回被删除的Todo的ID
    } catch (error) {
        throw error; // 抛出错误
    }
});

// 使用createAsyncThunk创建异步action creator，用于更新Prisma中的Todo并更新Redux store中的状态
export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ id, newText, newDate, newTime }) => {
    try {
        const updatedTask = await editTask(id, newText, newDate, newTime); // 更新Prisma中的Todo
        return updatedTask; // 返回更新后的Todo
    } catch (error) {
        throw error; // 抛出错误
    }
});

// 使用createAsyncThunk创建异步action creator，用于切换Prisma中的Todo完成状态并更新Redux store中的状态
export const toggleTodoCompletion = createAsyncThunk('todos/toggleTodoCompletion', async (id) => {
    try {
        const updatedTask = await toggleTaskCompletion(id); // 切换Prisma中的Todo完成状态
        return updatedTask; // 返回更新后的Todo
    } catch (error) {
        throw error; // 抛出错误
    }
});
