import React from 'react'

const OptionMenu = ({ option }) => {
    const buttonStyle = {
        color: 'white',
        border: 'none',
        backgroundColor: 'black',
        fontSize: '16px',
        cursor: 'pointer',
        padding: '0 12px',
    };
  return <button style={buttonStyle}>{option}</button>;
};

export default OptionMenu;