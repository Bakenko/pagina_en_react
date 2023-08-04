import React from "react";


const ButtonIcon = ({icon}) => {
    const iconStyle ={
        background: 'transparent',
        color: 'white',
        padding: '12px 16px',
        margin: '0 16px 0 0',
        border: '3px solid white',
        borderRadius: '50px',
        cursor: 'pointer',
        fontSize: '16px',

    };
    return <button style={iconStyle}>{icon}</button>
}

export default ButtonIcon;