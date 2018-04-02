import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { I18nProvider, withI18n, Trans } from '@lingui/react'
import { navigateTo } from 'gatsby-link'
import Header from '../components/Header'
import { catalogs, prefix, deprefix, langFromPath } from '../i18n-config'


const Lang = ({ lang, onClick, selected }) => (
  <a style={{ color: 'yellow', marginRight: '10px', textDecoration: selected ? 'underline' : 'none', cursor: 'pointer' }} onClick={onClick}>
    {lang}
  </a>
)

const Heade = (props) => (
  <div
  style={{
    background: 'rebeccapurple',
    marginBottom: '1.45rem'
  }}
  >
    {console.log(props)}
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Lang lang='en' onClick={(e) => props.onLangClick('en')} selected={props.lang == 'en'} />
        <Lang lang='ro' onClick={(e) => props.onLangClick('ro')} selected={props.lang == 'ro'} />
      </h1>
    </div>
  </div>
)

 class Head extends React.Component {
    onLangChange = (lang) => {
      navigateTo(prefix(lang) + deprefix(this.props.location.pathname))
    }
  
    render = () => {
      const lang = langFromPath('en')
      return (
        
        
          <Heade {...this.props} lang={lang} onLangChange={this.onLangChange} />
        
      )
    }
  }

export default Head