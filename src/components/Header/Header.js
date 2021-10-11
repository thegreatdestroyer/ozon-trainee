import React from 'react';
import logo from '../../logo.svg';
import Clock from  '../Clock/Clock';
import './Header.css';


const Header = () => {
    return ( 
    <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
        <p>
          Учёт товаров
        </p>
        <Clock />
      </header>
    );
}

export default Header;