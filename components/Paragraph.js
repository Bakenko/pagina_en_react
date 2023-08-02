import React from "react";

const Paragraph =({ color, FSize, text }) => {
    const paragraphStyle = {
        color: color,
        fontSize: FSize,
        lineHeight: 'normal',
        marginBottom: '24px',
    };
    return <p style={paragraphStyle}>{text}</p>
};

export default Paragraph;