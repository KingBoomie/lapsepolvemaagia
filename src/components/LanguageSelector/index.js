import React from 'react';

import LangText from './LangText';

const LangSelector = props => (
  <div>
    {console.log(props)}
    <div>
      <p style={{ margin: 0 }}>
        <LangText
          lang="English  "
          onClick={e => props.onLangClick('en')}
          selected={props.lang == 'en'}
        />
        <LangText
          lang="Eesti"
          onClick={e => props.onLangClick('et')}
          selected={props.lang == 'et'}
        />
      </p>
    </div>
  </div>
);


export default LangSelector;
