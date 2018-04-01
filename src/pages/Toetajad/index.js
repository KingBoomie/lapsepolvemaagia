import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

import Toetaja from '../../components/toetaja'
import uksetehas from './uksetehas.png'
import imatra from './imatra.png'
import garden from './garden.png'
import linn from './linn.png'

const ToetajadPage = () => (
  <div>
    <h1>Festivali toetajad:</h1>
    <div
      className={css({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
      })}
    >
      <Toetaja
        firmanimi="Haapsalu uksetehas"
        logo={<img src={uksetehas} alt={'Haapsalu uksetehase logo'} />}
        //leht={<a href="https://www.uksetehas.ee//">SIIN</a>}
        leht="https://www.uksetehas.ee/"
      />
      <Toetaja
        firmanimi="Imatra Elekter"
        logo={<img src={imatra} alt={'Imatra Elektri logo'} />}
        leht="http://imatraelekter.ee/"
      />
      <Toetaja
        firmanimi="Kekkilä Garden"
        logo={<img src={garden} alt={'Kekkilä Garden logo'} />}
        leht="https://www.kekkila.ee/"
      />
      <Toetaja
        firmanimi="Haapsalu linn"
        logo={<img src={linn} alt={'Haapsalu linna logo'} />}
        leht="http://www.visithaapsalu.com/"
      />
    </div>
  </div>
)

export default ToetajadPage
