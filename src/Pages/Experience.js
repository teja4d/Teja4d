import React from 'react'

export default function Experience({itemClicked}) {
    return (
        <div onClick={itemClicked}>
            <h3 style={{"color":"yellowgreen",
        "background":"linear-gradient(to bottom,#1a1f1e , #131b1b)",
        "width":"100vw",
    "minHeight":"100vh",
    "position":'fixed',
        
        "margin":'0',
        "fontSize":"16px",
        "display":"flex",
        "justifyContent":"center",
        "alignItems":"center",
        "fontFamily":"Courier"
        }}>This Page is under development !</h3>
        </div>
    )
}
