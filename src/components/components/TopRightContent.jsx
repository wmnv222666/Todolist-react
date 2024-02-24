import React from 'react';
import Card from './Card';

const TopRightContent = () => {
    const imageUrls = [
        '../../public/img/image-sevet.png',
        '../../public/img/image-fourte.png',
        '../../public/img/image-nint.png',
        '../../public/img/image-fourte.png',
    ];

    return (
        <>
            <h2 className='text-center'>Section</h2>
            <div style={topRightContentStyle}>
                {imageUrls.map((url, index) => (
                    <Card key={index} imageUrl={url} />
                ))}
            </div>
        </>
    );
};

const topRightContentStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
};

export default TopRightContent;

