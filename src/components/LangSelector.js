import React from 'react'
import Link from 'gatsby-link'

import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { I18nProvider, withI18n, Trans } from '@lingui/react'
import { navigateTo } from 'gatsby-link'
import Header from '../components/Header'
import { catalogs, prefix, deprefix, langFromPath } from '../i18n-config'
import LangText from '../components/LangText'

const LangSelector = props => (
    <div
      style={{
       
        background: '#B5D135',
        marginBottom: '1.45rem',
        border: 'solid',
        
      }}
    >
      {console.log(props)}
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1rem 1rem',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <LangText
            lang="en"
            onClick={e => props.onLangClick('en')}
            selected={props.lang == 'en'}
          />
          <LangText
            lang="et"
            onClick={e => props.onLangClick('ro')}
            selected={props.lang == 'ro'}
          />
        </h1>
      </div>
    </div>
  )
  
  export default LangSelector