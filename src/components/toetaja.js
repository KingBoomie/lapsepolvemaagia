import React from 'react'
import { css } from 'emotion'

const Toetaja = props => (
  <a href={props.leht}>
    <div
      className={css({
        // boxShadow: '0px 8px 5px -5px #888888', // replaced with border to make it seem more like a button
        background: 'white',
        filter: 'brightness(100%)', // this is what's required for making the whole div darker
        height: '100%',
        padding: '1rem',
        border: '1px solid rgba(0,0,0,0.05)',
        borderBottom: '3px solid rgba(0,0,0,0.4)',
        borderRadius: '5px',
        '&:hover': {
          // change these css attributes when sb hovers over the div
          filter: 'brightness(95%)',
        },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      })}
    >
      <h3>{props.firmanimi}</h3>
      <div>{props.logo}</div>
    </div>
  </a>
)
export default Toetaja
