import React from 'react'
import styled, { css } from 'react-emotion'
import Link from 'gatsby-link'

import LanguageSwitcher from './LanguageSwitcher'

const FooterText = styled.h4({
  margin: '0.2em',
  // color: '#bee0f7',
  '&:nth-child(3n)': {
    color: '#efc9ca',
  },
  '&:nth-child(3n+1)': {
    color: '#f15252',
  },
  '&:nth-child(3n+2)': {
    color: '#0c004c',
  },
})

const AboutInformation = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

function Footer() {
  return (
    <div
      className={css({
        padding: '1em 20%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        background: '#103c6b',
        borderTop: '5px solid #3cc57a',
      })}
    >
      <AboutInformation>
        <FooterText>Korraldaja: MTÜ Lugu</FooterText>
        <FooterText>Reg.nr. 80395538</FooterText>
        <FooterText>IBAN EE741700017003849060</FooterText>
        <FooterText>E-mail: haapsalulastefest@mail.ee</FooterText>
        <FooterText>Tel. +372 52 14210</FooterText>
      </AboutInformation>

      <Link to="/siseveeb">
        <FooterText>Siseveeb</FooterText>
      </Link>
    </div>
  )
}
export default Footer
