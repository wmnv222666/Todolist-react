// AddTodoForm.jsx

import React, { useState,useEffect } from 'react';

function AddTodoForm({ addTodo }) {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        console.log(date, "Updated Date");
    }, [date]);

    const handleSubmit = (e) => {
        // console.log(e)
        e.preventDefault();
        if (!text.trim() || (!date.trim) || (!time.trim)) return;
        addTodo(text, date, time);
        setText('');
        setDate('');
        setTime('');
        console.log("Submitted Date:", date);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-item">
                <label htmlFor="date">Date : </label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="form-item">
                <label htmlFor="desc">Content : </label>
                <input
                    type="text"
                    id="desc"
                    placeholder="Add a new todo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-item">
                <label htmlFor="time">Time : </label>
                <input
                    type="time"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <br></br>
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default AddTodoForm;
