import React from 'react'
import './Button.css'
export default function Button(props) {
    return (
        <div>
            <button className='button'><i className="fa fa-download icon"></i>{props.children}</button>
        </div>
    )
}
