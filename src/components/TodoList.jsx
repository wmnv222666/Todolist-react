// TodoList.jsx

import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, toggleTodoCompletion, editTodo }) {
    // console.log(todos,"todos222")
    return (
        <ul>
            {/* 11 */}
            {todos.map(todo => {
                // console.log(todo, "todo11")
             return(
                (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleTodoCompletion={toggleTodoCompletion}
                        editTodo={editTodo}
                    // filteredTodos={filteredTodos}
                    />
                ))
            })}
        </ul>
    );
}

export default TodoList;
