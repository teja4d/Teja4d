import React from 'react';
import { Link } from 'react-router-dom';
import './List.css'
export default function List({listItems}) {
    return (
        <div>
            <ul className="list">
                {listItems.map((item,index) => 
                <li key={index} className="list-items"><Link 
                style={{"textDecoration":"none",
                "color":"black",
                "fontWeight":"600"}} to='/'>{item}</Link></li>)}
            </ul>
        </div>
    )
}
