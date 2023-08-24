import React from "react";
import { IconType } from 'react-icons';


const ButtonIcon = ({icon, size, color, background}) => {
    const IconComponent = icon;
    return <IconComponent size={size} color={color} background={background} />
}

export default ButtonIcon;