import React from 'react'
import { navigate } from "gatsby"

import '../styles/header.scss'

const Header = () => (
  <div className="header__container">
    <p className="header__logo" onClick={ () => navigate('/')}>cartasu.ga</p>
    {/* <p>menu</p> */}
  </div>
)

export default Header
