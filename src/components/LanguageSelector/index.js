import React from 'react';

import LangText from './LangText';

const LangSelector = props => (
  <div
    style={{
      background: '#B5D135',
      marginBottom: '1.45rem',
      border: 'solid',
    }}
  >
    {console.log(props)}
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem 1rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <LangText
          lang="en"
          onClick={e => props.onLangClick('en')}
          selected={props.lang == 'en'}
        />
        <LangText
          lang="et"
          onClick={e => props.onLangClick('et')}
          selected={props.lang == 'et'}
        />
      </h1>
    </div>
  </div>
);


export default LangSelector;