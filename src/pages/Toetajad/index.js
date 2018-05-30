import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

import Toetaja from '../../components/Toetaja'
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
        logo={<img src={uksetehas} alt="Haapsalu uksetehase logo" />}
        // leht={<a href="https://www.uksetehas.ee//">SIIN</a>}
        leht="https://www.uksetehas.ee/"
        alt="Link Haapsalu uksetehase kodulehele."
      />
      <Toetaja
        firmanimi="Imatra Elekter"
        logo={<img src={imatra} alt="Imatra Elektri logo" />}
        leht="http://imatraelekter.ee/"
        alt="Link Imatra Elektri kodulehele."
      />
      <Toetaja
        firmanimi="Kekkilä Garden"
        logo={<img src={garden} alt="Kekkilä Garden logo" />}
        leht="https://www.kekkila.ee/"
        alt="Link Kekkilä Garden kodulehele."
      />
      <Toetaja
        firmanimi="Haapsalu linn"
        logo={<img src={linn} alt="Haapsalu linna logo" />}
        leht="http://www.visithaapsalu.com/"
        alt="Link Haapsalu linna kodulehele."
      />
    </div>
  </div>
)

export default ToetajadPage
