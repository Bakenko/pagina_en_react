import React from "react";

const Title =({ color, FSize, text }) => {
    const titleStyle = {
        color: color,
        fontSize: FSize,
        lineHeight: 'normal',
        marginBottom: '24px',
        marginTop: '24px',
    };
    return <h1 style={titleStyle}>{text}</h1>
};

export default Title;