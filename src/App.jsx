import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './store/actions/todoActions';

function App() {
	const dispatch = useDispatch();
	const todos = useSelector(state => state.todos.todos);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	const filteredTodos = todos.filter(todo =>
		todo.text.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="App">
			<h1>Todo List</h1>
			<AddTodoForm />
			<input
				type="text"
				placeholder="Search..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<TodoList todos={filteredTodos} />
		</div>
	);
}

export default App;
