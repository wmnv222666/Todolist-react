import React, { useState } from 'react';
function TodoItem({ todo, deleteTodo, toggleTodoCompletion, editTodo }) {
    // console.log(todo.date,"22222")
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo.text);
    const [date, setDate] = useState(todo.date || '');
    const [time, setTime] = useState(todo.time || '');

    const handleDelete = () => {
        deleteTodo(todo.id);
    };

    const handleToggleCompletion = () => {
        toggleTodoCompletion(todo.id);
    };

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSaveEdit = () => {
        editTodo(todo.id, text,date,time);
        setEditing(false);
        console.log("Date:", date)
    };

    return (
        <li>
            {editing ? (
                <>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                    {todo.date !== undefined && (
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    )}
                    {todo.time !== undefined && (
                        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                    )}
                    <button onClick={handleSaveEdit}>Save</button>
                </>
            ) : (
                <>
                    <input type="checkbox" checked={todo.completed} onChange={handleToggleCompletion} />
                    <span>{todo.text}</span>
                    <span>{todo.date}</span>
                    <span>{todo.time}</span>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </>
            )}
        </li>
    );
}

export default TodoItem;

