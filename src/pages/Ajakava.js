import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'
import ShowTimeSchedule from '../components/ShowTimeSchedule/index'
import ActivityDescription from '../components/ShowTimeSchedule/ActivityDescription'
import showDate from '../components/ShowTimeSchedule/showDate'
import LangSelector from '../components/LangSelector'
import { I18nProvider, withI18n, Trans } from '@lingui/react'
import { catalogs, prefix, deprefix, langFromPath } from '../i18n-config'
import { navigateTo } from 'gatsby-link'

const Wrapper = (props) => (
  <div>
    
    <LangSelector lang={props.lang} onLangClick={props.onLangChange} />



    <showDate>11.8.2018.</showDate> <ShowTimeSchedule> 10.00-10.30 <Trans render="ShowTimeSchedule">Activity</Trans> A </ShowTimeSchedule>

    <ActivityDescription><Trans render="ActivityDescription">activity description (performers/workshop info)</Trans> </ActivityDescription> 

    <ShowTimeSchedule>10.30-11.00 <Trans render="ShowTimeSchedule"> Activity</Trans> B </ShowTimeSchedule>
    
    <ActivityDescription> <Trans render="ActivityDescription">activity description (performers/workshop info)</Trans> </ActivityDescription>

    <ShowTimeSchedule>11.00-11.30 <Trans render="ShowTimeSchedule">Activity</Trans> C</ShowTimeSchedule>

    <ActivityDescription> <Trans render="ActivityDescription">activity description (performers/workshop info)</Trans> </ActivityDescription>
    
  </div>
)


class AjakavaPage extends React.Component {
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

export default withI18n()(AjakavaPage);