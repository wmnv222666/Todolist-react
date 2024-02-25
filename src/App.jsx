import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { addTask, deleteTask, editTask, getTasks, toggleTaskCompletion, disconnect } from '../utils/db';

function App() {
	const [todos, setTodos] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const getAllTasksFromDB = async () => {
			const tasks = await getTasks(); // 从数据库获取所有任务
			setTodos(tasks);
		};
		getAllTasksFromDB();

		return () => {
			disconnect();
		};
	}, []);

	const addTodo = async (text, date, time) => {
		// 向数据库添加新任务
		await addTask(text, date, time);
		const updatedTasks = await getTasks(); // 从数据库获取更新后的任务列表
		setTodos(updatedTasks);
	};

	const deleteTodo = async (id) => {
		await deleteTask(id); // 从数据库删除任务
		const updatedTasks = await getTasks(); // 从数据库获取更新后的任务列表
		setTodos(updatedTasks);
	};

	const toggleTodoCompletion = async (id) => {
		await toggleTaskCompletion(id); // 切换任务完成状态
		const updatedTasks = await getTasks(); // 从数据库获取更新后的任务列表
		setTodos(updatedTasks);
	};

	const editTodo = async (id, newText, newDate, newTime) => {
		// 更新任务文本、日期和时间
		await editTask(id, newText, newDate, newTime);
		const updatedTasks = await getTasks(); // 从数据库获取更新后的任务列表
		setTodos(updatedTasks);
	};

	const filteredTodos = todos.filter(todo =>
		todo.text.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="App">
			<h1>Todo List</h1>
			<AddTodoForm addTodo={addTodo} />
			<input
				type="text"
				placeholder="Search..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<TodoList
				todos={filteredTodos}
				deleteTodo={deleteTodo}
				toggleTodoCompletion={toggleTodoCompletion}
				editTodo={editTodo}
			/>
		</div>
	);
}

export default App;
