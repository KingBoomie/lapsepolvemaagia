import React from 'react'
import Link from 'gatsby-link'
import { Trans, withI18n } from '@lingui/react'
import Head from '../components/Head';



const IndePage = ({i18n}) => (
  <div>
   <Head  />
      <Trans render ="h1">Hi people</Trans>
   
    <p><Trans render="p">Welcome to your new Gatsby site.</Trans></p>
    <Trans render="p">Now go build something great.</Trans>
    
  </div>
)

export default withI18n()(IndePage)