// Card.js
import React from 'react';

const Card = ({ imageUrl }) => {
    return (
        <div style={cardStyle}>
            <img src={imageUrl} alt="Card" style={imageStyle} />
            <div>Title</div>
            <div>Description</div>
            <div>Price</div>
        </div>
    );
};

const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
};

const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    backgroundColor: '#D4EF3F'
};

export default Card;

