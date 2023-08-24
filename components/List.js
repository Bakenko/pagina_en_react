import React from "react";
import { footerList } from "./data";
import Paragraph from "./Paragraph";

function List ({ id, name, items}) {
    const styleLi = {
        color: 'rgb(153, 153, 153)'
    }
    return (
        <div>
            <Paragraph
            color='white'
            FSize='16px'
            text={name} 
            />
            <ul>
                {items.map(item =>
                    <li style={styleLi} key={item}>
                        {item}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default function ListItems ({}) {
    const styleList ={
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    }
    return (
        <div style={styleList}>
            {footerList.map(fList =>
                <List {...fList} key={fList.id}/>
                )}
        </div>
    );
}