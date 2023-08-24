import React from 'react';
import buttonStyle from './buttonStyle.css';

const Button = ({color, fColor, colorBorder, radius, name}) => {
  const buttonStyle = {
    background: fColor,
    color: color,
    border: colorBorder,
    borderRadius: radius,
    
    // fontWeight: 'bold',
  };
return <button className='buttonStyle' style={buttonStyle}>{name}</button>
};

export default Button;