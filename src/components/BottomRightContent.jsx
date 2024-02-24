// BottomRightContent.js
import React from 'react';
import Card from './Card';
import './styles.css'

const BottomRightContent = () => {
    const imageUrls = [
        '../../public/img/image-sevet.png',
        '../../public/img/image-fourte.png',
        '../../public/img/image-nint.png',
        '../../public/img/image-fourte.png',
        '../../public/img/image-fourte.png',
        '../../public/img/image-nint.png',
        '../../public/img/image-fourte.png',
        '../../public/img/image-sevet.png',
    ];

    return (
        <>
            <h2 className='text-center'>Section</h2>
            <div style={bottomRightContentStyle}>
                {imageUrls.map((url, index) => (
                    <Card key={index} imageUrl={url} />
                ))}
            </div>
        </>
    );
};

const bottomRightContentStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
};

export default BottomRightContent;
