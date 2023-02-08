import React from 'react'
import Logo from './img/logo.png'
import './Github.css'

export default function Github(){
    return(
        <footer>
            <h1>Create with React.JS <img alt="react" src={Logo}/></h1>
            <h1>Devloped  By <a href='https://github.com/Amitcodingninja'>@Amit</a></h1>
        </footer>
    )
}