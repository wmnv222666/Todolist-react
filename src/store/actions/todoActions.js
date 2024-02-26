import { getTasks, addTask, deleteTask, editTask, toggleTaskCompletion } from '../../../utils/db';

export const FETCH_TODOS = 'FETCH_TODOS';

export const fetchTodos = () => async (dispatch) => {
    try {
        const todos = await getTasks();
        dispatch({ type: FETCH_TODOS, payload: todos });
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
};

export const addTodo = (text, date, time) => async (dispatch) => {
    try {
        await addTask(text, date, time);
        dispatch(fetchTodos());
    } catch (error) {
        console.error('Error adding todo:', error);
    }
};

export const removeTodo = (id) => async (dispatch) => {
    try {
        await deleteTask(id);
        dispatch(fetchTodos());
    } catch (error) {
        console.error('Error removing todo:', error);
    }
};

export const toggleTodo = (id) => async (dispatch) => {
    try {
        await toggleTaskCompletion(id);
        dispatch(fetchTodos());
    } catch (error) {
        console.error('Error toggling todo:', error);
    }
};

export const updateTodo = (id, newText, newDate, newTime) => async (dispatch) => {
    try {
        await editTask(id, newText, newDate, newTime);
        dispatch(fetchTodos());
    } catch (error) {
        console.error('Error updating todo:', error);
    }
};
