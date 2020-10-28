import React from 'react'

function MainOrnament({text}) {
    return (
        <div className="mainOrnament">
            <h2 className="ornamentText">{text}</h2>
            <div className="ornamentIcon"></div>
        </div>
    )
}

export default MainOrnament
