import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import MenuIcon from "../MenuIcon"
import "./header.scss"

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => setMenuOpen(prev => !prev)

  return (
    <header
      style={{
        display: `flex`,
      }}
    >
      <div className="header-child" style={{ visibility: `hidden`}}>search</div>
      <div id="site-title" className="header-child">
        <Link to="/">
          {siteTitle}
        </Link>
      </div>
      <div className="header-child"
      style={{
        textAlign: `right`,
      }}
      >
        <div style={{ visibility: `hidden`}}></div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
