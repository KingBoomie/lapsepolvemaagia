import React from 'react'
import { css } from 'emotion'

const ShowTimeSchedule = props => (
  <div
    className={css({
      background: 'midnightblue',
      color: 'white',
      fontSize: '1vw',
      border: 'solid',
      padding: '2%',
      width: '15em',
      textAlign: 'left',
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      marginBottom: '15',
    })}
  >
    {props.children}
  </div>
)

export default ShowTimeSchedule
