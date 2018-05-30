import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// HACK: webpack error when building otherwise
try {
  Fingerprint2 = require('fingerprintjs2');

  const timeout = new Promise((resolve, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id);
      resolve();
    }, 200)
  })
  
  
  
  const fingerprint = timeout
    .then(() => {
      new Fingerprint2().get((res, components) => {
  
        const merged = [res].concat(components.map(e => e.value))
  
        console.log(merged)
        request().put('/fingerprint', merged)
          .then(res => console.log(res.data))
      
    })
  })
} catch (e) {
  console.log(e)
}
import { css } from 'emotion';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { request } from '../utils/api.js';

import icon from '../icon.png'




const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Lapsepolvemaagia"
      meta={[
        {
          name: 'description',
          content: 'Veebileht suvisele lapsepõlvemaagia festivalile',
        },
        {
          name: 'keywords',
          content:
            'lapsepõlv, maagia, festival, haapsalu, lapsepõlvemaagia ,lapsepolvemaagia',
        },
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${icon}` }]}
    />
    <Header />

    <div
      className={css({
        margin: '0 auto',
        maxWidth: 1280,
        padding: '1rem 1.0875rem 1.45rem',
      })}
    >
      {children()}
    </div>

    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
