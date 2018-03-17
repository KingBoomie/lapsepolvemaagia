import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { css } from 'emotion'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Lapsepolvemaagia"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Menu />

    <div
      className={css({
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem 1.0875rem 1.45rem',
      })}
    >
      {children()}
      <br/>
    </div>
      <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
