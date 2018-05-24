import React from 'react';
import Link from 'gatsby-link';
import { cx, css } from 'emotion';

import HaapsaluMap from '../components/Map';
import TimeCounter from '../components/TimeCounter';
import LangSelector from '../components/LanguageSelector'
import { I18nProvider, withI18n, Trans } from '@lingui/react'
import { catalogs, prefix, deprefix, langFromPath } from '../i18n-config'
import { navigateTo } from 'gatsby-link'


const DescriptionStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  fontWeight: '600',
  lineHeight: '1.8',
});



const Wrapper = (props) => (
  <div>
    <LangSelector lang={props.lang} onLangClick={props.onLangChange}/>
  <div
    className={css(`
    display: grid;
    grid-gap: 2vmax;
    padding: 1vmax;
    grid-template-columns: 1fr;
    grid-template-areas: 
      "box"
      "map"
      "desc"
      "desc2";

    @media (min-width: 500px) {
      grid-template-columns: repeat(3,minmax(20vw, auto));
      grid-template-rows: minmax(20vw, auto);
      grid-template-areas:
        "desc map map"
        "box desc2 desc2";
      
    }
  `)}
  >   
  
    <TimeCounter
      className={css(`grid-area: box`)}
      untill={new Date('2018-04-06T11:00:00+03:00')}
    />
    <HaapsaluMap
      className={css(`
      grid-area: map;
      height: 300px;
      @media (min-width: 600px) {
        height: 100%;
      }
    `)}
    />
    <div className={cx(DescriptionStyle, css({ gridArea: 'desc' }))}>
       <Trans render="DescriptionStyle">
      The Childhood Magic                         
       </Trans>
      <p></p>
      <Trans render="DescriptionStyle">
        We want to
        </Trans>
        <p></p>
        <Trans render="DescriptionStyle">
        The talented
        </Trans>
    </div>

    <div className={cx(DescriptionStyle, css({ gridArea: 'desc2' }))}>
    <Trans render="DescriptionStyle">
    The target
      </Trans>
      <p></p>
      <Trans render="DescriptionStyle">
        The festival
      </Trans>
      <p></p>
      
      <Trans render="DescriptionStyle">
      On the one hand
      </Trans>
      <p></p> 
      <Trans render="DescriptionStyle">
      A great role
      </Trans>
      <p></p>
      <Trans render="DescriptionStyle">This is</Trans>
    </div>
  </div>
  </div>
);


class IndexPage extends React.Component {
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


export default withI18n()(IndexPage);
