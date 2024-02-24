import React from 'react';
import TopRightContent from './TopRightContent';
import BottomRightContent from './BottomRightContent';

const RightContent = () => {
    return (
        <div style={rightContentStyle}>
            <TopRightContent />
            <BottomRightContent />
        </div>
    );
};

const rightContentStyle = {
    flex: '0 0 65%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#D9EB74',
};
export default RightContent;
