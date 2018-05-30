import React from 'react'
import styled, { css } from 'react-emotion'
import Link from 'gatsby-link'

const FooterText = styled.h4({
  margin: '0.2em',
  color: '#294C71',
  /*'&:nth-child(3n)': {
        color: '#efc9ca',
    },
    '&:nth-child(3n+1)': {
        color: '#f15252',
    },
    '&:nth-child(3n+2)': {
        color: '#0c004c',
    }*/
})

const AboutInformation = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
})

function Footer() {
  return (
    <div
      className={css({
        padding: '1em',
        //width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        background: '#B5D135',
        borderTop: '5px solid #294C71',
        flexWrap: 'wrap',
      })}
    >
      <AboutInformation>
        <FooterText>Korraldaja: MTÜ Lugu</FooterText>
        <FooterText>Reg.nr. 80395538</FooterText>
        <FooterText>IBAN EE741700017003849060</FooterText>
      </AboutInformation>
      <AboutInformation>
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
