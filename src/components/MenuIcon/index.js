import React from "react"

import "./menu-icon.css"

const MenuIcon = ({ handleOverlayMenu }) => (
  <button className="hamburger-icon" onClick={handleOverlayMenu}>
    menu
  </button>
)

export default MenuIcon
