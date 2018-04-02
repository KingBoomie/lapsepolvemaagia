import React from 'react'
import Link from 'gatsby-link'
import Toetaja from '../../components/toetaja'
import uksetehas from './uksetehas.png'
import imatra from './imatra.png'
import garden from './garden.png'
import linn from './linn.png'

const ToetajadPage = () => (
  <div>
    <h1>Festivali toetajad:</h1>
    <Toetaja
      firmanimi="Haapsalu uksetehas"
      logo={<img src={uksetehas} alt={'Haapsalu uksetehase logo'} />}
      leht={<a href="https://www.uksetehas.ee//">SIIN</a>}
    />
    <Toetaja
      firmanimi="Imatra Elekter"
      logo={<img src={imatra} alt={'Imatra Elektri logo'} />}
      leht={<a href={'http://imatraelekter.ee/'}>SIIN</a>}
    />
    <Toetaja
      firmanimi="Kekkilä Garden"
      logo={<img src={garden} alt={'Kekkilä Garden logo'} />}
      leht={<a href={'https://www.kekkila.ee/'}>SIIN</a>}
    />
    <Toetaja
      firmanimi="Haapsalu linn"
      logo={<img src={linn} alt={'Haapsalu linna logo'} />}
      leht={<a href={'http://www.visithaapsalu.com/'}>SIIN</a>}
    />
  </div>
)

export default ToetajadPage
