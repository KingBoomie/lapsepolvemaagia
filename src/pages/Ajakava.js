import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'
import ShowTimeSchedule from '../components/ShowTimeSchedule/index'
import ActivityDescription from '../components/ShowTimeSchedule/ActivityDescription'
import showDate from '../components/ShowTimeSchedule/showDate'

const AjakavaPage = () => (
  <div>
    <showDate>11.8.2018.</showDate>
    <ShowTimeSchedule>10.00-10.30 tegevus a </ShowTimeSchedule>
    <ActivityDescription>
      tegevuse a kirjeldus (esinejate/töötoa info){' '}
    </ActivityDescription>
    <ShowTimeSchedule>10.30-11.00 tegevus b</ShowTimeSchedule>
    <ActivityDescription>
      tegevuse b kirjeldus (esinejate/töötoa info){' '}
    </ActivityDescription>
    <ShowTimeSchedule>11.00-11.30 tegevus c</ShowTimeSchedule>
    <ActivityDescription>
      tegevuse c kirjeldus (esinejate/töötoa info){' '}
    </ActivityDescription>
  </div>
)

export default AjakavaPage
