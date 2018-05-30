import React from 'react'
import Link from 'gatsby-link'

import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { I18nProvider, withI18n, Trans } from '@lingui/react'
import { navigateTo } from 'gatsby-link'
import Header from '../components/Header'
import { catalogs, prefix, deprefix, langFromPath } from '../i18n-config'
import LangSelector from '../components/LanguageSelector'

import { subscribeToCounter } from '../utils/api.js'

class LoadCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0};
    subscribeToCounter((err,newCount) => {
      console.log(newCount);
      this.setState({ count: newCount });
    })
  }
  
  render() {
    return (
      <div>
        <p>
          Arhiivi on vaadatud {this.state.count} korda.
        </p>
      </div>
    )
  }
}

const Wrapper = (props) => (
  <div>
    <LangSelector lang={props.lang} onLangClick={props.onLangChange} />
    <Trans render="h1">Hi from Page</Trans> <Trans render = "h1"> Archives</Trans>
    
      <LoadCounter/>
    
    {console.log(props)}
    
  </div>)

class ArhiivPage extends React.Component {
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

export default withI18n()(ArhiivPage)
