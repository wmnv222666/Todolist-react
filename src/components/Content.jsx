
import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Content = () => {
  return (
    <div style={contentStyle}>
      <LeftContent />
      <RightContent /> 
    </div>
  );
};

const contentStyle = {
  display: 'flex',

  marginTop: '2rem',
  gap:'70px'
};

export default Content;
