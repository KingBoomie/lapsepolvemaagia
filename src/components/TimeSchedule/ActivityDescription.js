import React from 'react'
import { css } from 'emotion'

const ActivityDescription = props => {
  const kirjeldusElemendid = props.kirjeldused.map((kirjeldusRida, i) => (
    <p key={i}>{kirjeldusRida}</p>
  ));
    return (
      <div
        className={css({
          background: 'Chartreuse ',
          color: 'black',
          fontSize: '2vw',
          border: 'solid',
          padding: '5%',
          width: '30em',
          marginLeft: 'auto',
          marginRight: 'auto',

          textAlign: 'center',
          boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
          marginBottom: '15',
          marginTop: '15',
        })}
      >
        {kirjeldusElemendid}
      </div>
      )
}

export default ActivityDescription
