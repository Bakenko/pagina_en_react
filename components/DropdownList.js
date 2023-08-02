import React from "react";

const DropdownList = ({ Fsize }) => {
    const styleDropdownList = {
        backgroundColor: 'rgb(33, 33, 33)',
        color: 'white',
        width: '150px',
        height: '40px',
        fontSize: Fsize,
        border: 'none',
    };
    return <select style={styleDropdownList}>
        <option>BRL</option>
        <option>CNY</option>
        <option>JPY</option>
        <option>KWR</option>
        <option>USD</option>
        <option>EUR</option>
    </select>
};

export default DropdownList;