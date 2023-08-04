import React from 'react';

const Button = ({color, fColor, colorBorder, radius, name}) => {
  const buttonStyle = {
    background: fColor,
    color: color,
    padding: '12px 16px',
    margin: '0 32px 0 0',
    border: colorBorder,
    borderRadius: radius,
    cursor: 'pointer',
    fontSize: '16px',
    // fontWeight: 'bold',
  };
return <button style={buttonStyle}>{name}</button>
};

export default Button;