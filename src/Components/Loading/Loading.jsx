import React from 'react'
import './Loading.css'

const Loading =() => {
    return
    <div className='container-loading'>
        <div className='container-pacman'>
            <svg class="pacman">
                <circle cx="50" cy="50" r="25"></circle>
            </svg>

            <svg class="ojo">
                <circle cx="6" cy="6" r="6"></circle>
            </svg>

            <svg class="pildora">
                <polyline points="0,7 240,7"></polyline>
            </svg>
        </div>

    </div>
}
export default Loading