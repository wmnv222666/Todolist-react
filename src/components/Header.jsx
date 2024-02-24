import React from 'react';

const Header = () => {
  return (
    <div style={headerStyle}>
      <img src="https://logos.textgiraffe.com/logos/logo-name/Wei-designstyle-pastel-m.png" alt="Logo" style={logoStyle} />
      <div>Hearder</div>
      <button style={menuStyle}>Navigation</button>
    </div>
  );
};

// Inline styles
const headerStyle = {
  backgroundColor: 'pink',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
};

const logoStyle = {
  width: '50px', 
  height: '50px', 
  objectFit: 'cover', 
  marginRight: '1rem', 
  fontWeight: 'bold',
};

const menuStyle = {};

export default Header;
