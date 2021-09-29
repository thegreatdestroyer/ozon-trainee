import React from 'react';
import logo from '../../logo.svg';
import Clock from  '../Clock/Clock';
import './Header.css';


const Header = () => {
    return ( 
    <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
        <p>
          imya shapki
        </p>
        <Clock />
      </header>
    );
}

export default Header;