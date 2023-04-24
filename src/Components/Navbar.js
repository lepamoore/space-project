import React, { useState } from 'react';
import '../CSS/Navbar.css';

function Navbar(props) {
    return (
        <header>
            <img src={require('../assets/shared/logo.svg').default} />
            <nav>
                <img src={require('../assets/shared/icon-close.svg').default} alt="Cross to close the Navmenu" id='crossToClose'/>
                <ul id='navList'>
                    <li className='navListItems' id='navHome'><span>00</span>HOME</li>
                    <li className='navListItems' id='navDestination'><span>01</span>DESTINATION</li>
                    <li className='navListItems' id='navCrew'><span>02</span>CREW</li>
                    <li className='navListItems' id='navTechnology'><span>03</span>TECHNOLOGY</li>
                </ul>
            </nav>
            <img src={require('../assets/shared/icon-hamburger.svg').default} alt='Burger icon to open the menu' id='burgerToOpen'/>
        </header>
    );
}

export default Navbar;