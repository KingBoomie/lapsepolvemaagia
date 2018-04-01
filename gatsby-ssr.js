/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

 // You can delete this file if you're not using it

// gatsby-ssr.js

import React from 'react'
import { renderToString } from 'react-dom/server'
import i18n from './src/i18n'

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  i18n.loadNamespaces(['common'], () => {
    replaceBodyHTMLString(bodyComponent)
  })
}