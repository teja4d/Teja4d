import React from 'react'
import './circular.css'
export default function CircularBar() {
    return (
        <div className='circle-container'>
           
                <div className='circle-up'>
                    <div className='rectangle'></div>
            </div>

            <div className='circle-down'>
                    <div className='rectangle1'></div>
            </div>
            <div className='inner-circle'></div>
        </div>
    )
}
