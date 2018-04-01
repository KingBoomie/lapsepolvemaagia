import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

import HaapsaluMap from '../components/Map.js'
import TimeCounter from '../components/TimeCounter'
import PageHeader from '../components/PageHeader'

const IndexPage = () => ( // TODO, something here is fucked up, but it works atm
  <div className={ css(`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-areas: 
      "map"
      "box";

    @media (min-width: 500px) {
      grid-template-columns: 1fr 2fr; 
      grid-template-areas:
        "box map";
      
    }
  `
    )}>
    <TimeCounter className={css( `grid-area: box` )}
      untill={new Date(2018,8,11)}
    />
    <HaapsaluMap className={css(`
      grid-area: map;
      height: 200px;
      @media (min-width: 500px) {
        height: 100%;
      }
    `)}/>


    
  </div>
)

export default IndexPage
