import React from 'react';
import Link from 'gatsby-link';
import { cx, css } from 'emotion';

import HaapsaluMap from '../components/Map';
import TimeCounter from '../components/TimeCounter';
import LangText from '../components/LangText'
import LangSelector from '../components/LangSelector'
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
  >   <LangSelector lang={props.lang} onLangClick={props.onLangChange}
  className={css(`
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  fontWeight: '600',
  lineHeight: '1.8',
    `)} />
  
    <TimeCounter
      className={css(`grid-area: box`)}
      untill={new Date('2018-08-11T11:00:00+03:00')}
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
      The Childhood Magic focuses on the tradition and the practices of Läänemaa, grandparents and grandchildren.                         
       </Trans>
      <p></p>
      <Trans render="DescriptionStyle">

        We want to show the festival that the technological gadget is important, but the time consumed and the wisdom that was listened to, which is hidden behind the festival lies.

        </Trans>
        <p></p>
        <Trans render="DescriptionStyle">
        The talented children of Läänemaa will be performed and workshops will be held in which the works will be studied.
        </Trans>
    </div>

    <div className={cx(DescriptionStyle, css({ gridArea: 'desc2' }))}>
    <Trans render="DescriptionStyle">
    The target group of the festival is children, their parents and grandparents.
      </Trans>
      <p></p>
      <Trans render="DescriptionStyle">
        The festival will be conducted as a cultural festival aimed at bringing together children of all generations between games, music, activities, and real-life work.
      </Trans>
      <p></p>
      
      <Trans render="DescriptionStyle">
      On the one hand, it is the childhood of today's children, and on the other hand, as a walk to the past to remind and pass on the inheritance.
      </Trans>
      <p></p> 
      <Trans render="DescriptionStyle">
      A great role is played on the identity of the place - Läänemaa. Childhood Magic is a cultural festival of children from Haapsalu and Läänemaa, where songs, dance, pitching, art and workshops meet.
      </Trans>
      <p></p>
      <Trans render="DescriptionStyle">This is the party for children and families.</Trans>
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
