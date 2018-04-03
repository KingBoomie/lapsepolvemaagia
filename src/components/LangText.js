import React from 'react'
import Link from 'gatsby-link'

import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { I18nProvider, withI18n, Trans } from '@lingui/react'
import { navigateTo } from 'gatsby-link'
import Header from '../components/Header'
import { catalogs, prefix, deprefix, langFromPath } from '../i18n-config'

const LangText = ({ lang, onClick, selected }) => (
    <a
      style={{
        color: '#294C71',
        marginRight: '10px',
        textDecoration: selected ? 'underline' : 'none',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {lang}
    </a>
  )

  export default LangText