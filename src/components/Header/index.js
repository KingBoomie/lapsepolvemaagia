import React from 'react'
import Link from 'gatsby-link'
import banner from './banner.jpg'

import { css } from 'emotion'

console.log(banner)

function Header() {
  return (
    <Link to="/">
      <img
        src={banner}
        alt={'Lapsepõlvemaagia poster'}
        styleClass={css({ marginBottom: 0 })}
      />
    </Link>
  )
}
export default Header
