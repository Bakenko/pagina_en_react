import React from "react";

const Paragraph =({ color, FSize, margin, text }) => {
    const paragraphStyle = {
        color: color,
        fontSize: FSize,
        lineHeight: 'normal',
        marginBottom: '24px',
        margin: margin,
    };
    return <p style={paragraphStyle}>{text}</p>
};

export default Paragraph;