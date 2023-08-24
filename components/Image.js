import React from "react";

const Image = ({ src, alt, bRadius}) => {
    const styleImage = {
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        borderRadius: bRadius,
    };
    return <img style={styleImage} src={src} alt={alt} />
}

export default Image;