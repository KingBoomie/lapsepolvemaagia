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
      color: 'yellow',
      marginRight: '10px',
      textDecoration: selected ? 'underline' : 'none',
      cursor: 'pointer',
    }}
    onClick={onClick}
  >
    {lang}
  </a>
)

const LangSelector = props => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    {console.log(props)}
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <LangText
          lang="en"
          onClick={e => props.onLangClick('en')}
          selected={props.lang == 'en'}
        />
        <LangText
          lang="ro"
          onClick={e => props.onLangClick('ro')}
          selected={props.lang == 'ro'}
        />
         <LangText
          lang="et"
          onClick={e => props.onLangClick('et')}
          selected={props.lang == 'et'}
        />
      </h1>
    </div>
  </div>
)

const Wrapper = (props) => (
<div>
  <LangSelector lang={props.lang} onLangClick={props.onLangChange} />
  <Trans render="h1">Hi people</Trans>
  {console.log(props)}
  <p>
    <Trans id="welcome text"/>
  </p>
  <Trans render="p">Now go build something great.</Trans>
</div>)

class TestPage extends React.Component {
  constructor(props) {
    super(props)
  }
  onLangChange = lang => {
    navigateTo(prefix(lang) + deprefix(this.props.location.pathname))
  }

  render = () => {
    
    const lang = langFromPath(this.props.location.pathname)

    return (
      <I18nProvider language={lang} catalogs={catalogs}>
        <Wrapper {...this.props} lang={lang} onLangChange={this.onLangChange} />
      </I18nProvider>
    )

  }
}

export default withI18n()(TestPage)
