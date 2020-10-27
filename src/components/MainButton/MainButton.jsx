import React from 'react'
import {Link} from "react-router-dom"

function MainButton({text, to}) {
    return (
        <Link className='button mainButton' to={to}>
            {text}
        </Link>
    )
}

export default MainButton
