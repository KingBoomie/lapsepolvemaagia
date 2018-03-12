import React from 'react'
import Link from 'gatsby-link'
import banner from './banner.jpg'


console.log(banner);

function Header(){
    return <Link to="/">
      <img src={banner} alt={"Lapsepõlvemaagia poster"}/>
    </Link>

}
export default Header
