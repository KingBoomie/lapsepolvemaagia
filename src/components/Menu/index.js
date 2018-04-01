import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

const MenuLink = props => (
  <Link
    to={props.to}
    className={css({
      width: '100%',
      textAlign: 'center',

      '&:nth-child(1)': {
        background: '#85C1E9',
      },
      '&:nth-child(2)': {
        background: '#AED6F1',
      },
      '&:nth-child(3)': {
        background: '#D6EAF8',
      },
      '&:nth-child(4)': {
        background: '#EBF5FB',
      },
      '&:nth-child(5)': {
        background: '#D6EAF8',
      },
      '&:nth-child(6)': {
        background: '#AED6F1',
      },
      '&:nth-child(7)': {
        background: '#85C1E9',
      },

      '@media (min-width: 1450px)': {
        width: 'auto',
        background: 'none',

        '&:nth-child(1)': {
          background: 'none',
        },
        '&:nth-child(2)': {
          background: 'none',
        },
        '&:nth-child(3)': {
          background: 'none',
        },
        '&:nth-child(4)': {
          background: 'none',
        },
        '&:nth-child(5)': {
          background: 'none',
        },
        '&:nth-child(6)': {
          background: 'none',
        },
        '&:nth-child(7)': {
          background: 'none',
        },
      },
    })}
    activeClassName={css({
      '& h3': {
        fontSize: '2em',
        // lineHeight: '0.8em',
      },
    })}
    exact
  >
    <h3
      className={css({
        color: '#294C71',
        borderTop: '3px solid white',
        padding: '1em 0',
        margin: '0',

        '@media (min-width: 1450px)': {
          color: 'black',
          background: 'none',
          padding: '0 1vw',
          // marginBottom: '0em',
          borderTop: '0 none white',
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
      borderBottom: '5px solid #294C71',
      padding: '1rem 0',

      '@media (min-width: 1450px)': {
        flexDirection: 'row',
      },
    })}
  >
    <MenuLink to="/">Lapsepõlvemaagia</MenuLink>
    <MenuLink to="/ajakava">Ajakava</MenuLink>
    <MenuLink to="/kauplejale">Kauplejale</MenuLink>
    <MenuLink to="/sipsik">Sipsiku ümbermaailmareis</MenuLink>
    <MenuLink to="/arhiiv">Arhiiv</MenuLink>
    <MenuLink to="/vanavanemad">Mis on sinu vanavanemate nimed?</MenuLink>
    <MenuLink to="/Toetajad">Toetajad</MenuLink>
  </div>
)
