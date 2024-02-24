// App.jsx

import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
	const [todos, setTodos] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');


	const addTodo = (text,data,time) => {
		const newTodo = { id: todos.length + 1, text, data,time,completed: false };
		setTodos([...todos, newTodo]);
	};

	const deleteTodo = (id) => {//delete filter
		setTodos(todos.filter(todo => todo.id !== id));
	};

	const toggleTodoCompletion = (id) => {
		setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
	};

	const editTodo = (id, newText) => {
		setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
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

