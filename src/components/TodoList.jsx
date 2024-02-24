// TodoList.jsx

import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, toggleTodoCompletion, editTodo }) {
    return (
        <ul>
            {/* 11 */}
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleTodoCompletion={toggleTodoCompletion}
                    editTodo={editTodo}
                    // filteredTodos={filteredTodos}
                />
            ))}
        </ul>
    );
}

export default TodoList;
