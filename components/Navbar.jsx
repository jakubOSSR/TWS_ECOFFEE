import React from 'react'
import Link from 'next/Link';
import { AiOutlineShopping} from 'react-icons/ai';
import { urlFor } from '../LIB/client';
import {useRef} from 'react';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';




const Navbar = () => {
  const {showCart,setShowCart,totalQuan} = useStateContext();
  
   return (
      <div className="navbar-container">

          <p className="logo">
          <img src="./images/logom.png"
          width="90"
          height="60"/>
          </p>
          <nav-menu>
            <menu-btn><a href="/">Eshop</a></menu-btn>
            <menu-btn><a href="/blog">Blog</a></menu-btn>
            <menu-btn><a href="#kontakt">Kontakt</a></menu-btn>
          </nav-menu>
          <button type="button"
          className="cart-icon" onClick={() => setShowCart(true)}>
            <AiOutlineShopping/>
            <span className="cart-item-qty">{totalQuan}</span>
          </button>

          {showCart && <Cart/>}
      
      </div>
      

  )
  
}



export default Navbar