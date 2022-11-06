import React from 'react'
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
      <p></p>
      <p>Email: vymysleny@mail.com</p>
      <p>Telefón: +421 911 111 111</p>
      <p></p>
      <p>Vymyslená ulica 123</p>
      <p>Mesto Neznáme 01345</p>
      <p></p>
      <p></p>
      <p></p>
      <p> 2022 Fajnová káva Všetky práva vyhradené</p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiOutlineTwitter/>
      </p>
      
      <div id="kontakt"> 
      
      </div>
    </div>
  )
}

export default Footer