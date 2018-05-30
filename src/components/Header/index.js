import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

import banner from './banner.jpg'
import Menu from './Menu'

function Header() {
  return (
    <div>
      <Link to="/">
        <img
          src={banner}
          alt="Lapsepõlvemaagia poster"
          className={css({ marginBottom: 0 })}
        />
      </Link>
      <Menu />
    </div>
  )
}
export default Header
