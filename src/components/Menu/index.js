import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

const MenuLink = props => (
  <Link
    to={props.to}
    className={css({
      width: '100%',
      textAlign: 'center',

      '&:nth-child(3n)': {
        background: '#fdaf40',
      },
      '&:nth-child(3n+1)': {
        background: '#f15252',
      },
      '&:nth-child(3n+2)': {
        background: '#0c004c',
      },
      '@media (min-width: 1400px)': {
        width: 'auto',
        background: 'none',
        '&:nth-child(3n)': {
          background: 'none',
        },
        '&:nth-child(3n+1)': {
          background: 'none',
        },
        '&:nth-child(3n+2)': {
          background: 'none',
        },
      },
    })}
  >
    <h3
      className={css({
        color: 'white',
        borderTop: '3px solid white',
        padding: '1em 0',
        margin: '0',
        '@media (min-width: 1400px)': {
          color: 'black',
          background: 'none',
          padding: '0 1em',
          marginBottom: '1em',
          borderBottom: '0 none black',
          borderRight: '3px solid tomato', // just for you, Ida
          // ':last-child': {
          //     borderRight: '3px none tomato',
          // }
        },
      })}
    >
      {props.children}
    </h3>
  </Link>
)

export default props => (
  <div
    className={css({
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottom: '5px solid lightblue',

      '@media (min-width: 1400px)': {
        flexDirection: 'row',
      },
    })}
  >
    <MenuLink to="/">Avaleht</MenuLink>
    <MenuLink to="/ajakava">Ajakava</MenuLink>
    <MenuLink to="/kauplejale">Kauplejale</MenuLink>
    <MenuLink to="/sipsik">Sipsiku ümbermaailmareis</MenuLink>
    <MenuLink to="/arhiiv">Arhiiv</MenuLink>
    <MenuLink to="/vanavanemad">Mis on sinu vanavanemate nimed?</MenuLink>
    <MenuLink to="/Toetajad">Toetajad</MenuLink>
    <MenuLink to="/langTest">languagetest</MenuLink>
  </div>
)
