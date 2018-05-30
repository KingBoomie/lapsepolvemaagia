import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'
import pilt1 from '../Toetajad/imatra.png'
import pilt2 from '../Toetajad/garden.png'
import Event from '../../components/Event'

const AjakavaPage = () => (
  <div>
    <h1>11.08.2018</h1>
    <Event
      kellaaeg="11:00"
      tegevus="Tegevus A"
      kirjeldus={[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ]}
      pilt={pilt1}
    />

    <Event
      kellaaeg="12:00"
      tegevus="Tegevus B"
      kirjeldus={[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ]}
      pilt={pilt2}
    />
  </div>
)

export default AjakavaPage
