import React from 'react'
import Link from 'gatsby-link'

import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {I18nProvider, withI18n, Trans} from '@lingui/react'
import {navigateTo} from 'gatsby-link'
import Header from '../components/Header'
import {catalogs, prefix, deprefix, langFromPath} from '../i18n-config'
import LangSelector from '../components/LanguageSelector'


class KauplejalePage extends React.Component {
    constructor(){
        super()
        this.state = {
            isHidden: true
        }
    }
    toggleHidden(){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.toggleHidden.bind(this)}>
                    Vajuta siia!
                </button>
                {!this.state.isHidden && <Peidetav/>}
            </div>
        )
    }
}

const Peidetav= () => (
    <div className='modal'>
        Peidetav sisu.
    </div>
)


export default KauplejalePage
