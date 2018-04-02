import React from 'react'
import Link from 'gatsby-link'
import { Trans, withI18n } from '@lingui/react'

const IndePage = ({i18n}) => (
  <div>
    <h1>
      <Trans>Hi people</Trans>
    </h1>
    <p><Trans>Welcome to your new Gatsby site.</Trans></p>
    <Trans render="p">Now go build something great.</Trans>    
  </div>
)

export default withI18n()(IndePage)