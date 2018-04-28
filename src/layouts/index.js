import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { css } from 'emotion';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

<<<<<<< HEAD
import icon from '../icon.png'
=======

>>>>>>> 78a5903f1ae52badcd019b2cb8bf06867f72d281
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
          content: 'lapsepõlv, maagia, festival, haapsalu, lapsepõlvemaagia ,lapsepolvemaagia'
        },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${icon}` }
    ]}

    >
      <html lang="et" />
    </Helmet>
    <Header />
    <Menu />

    <div
      className={css({
        margin: '0 auto',
        maxWidth: 1280,
        padding: '1rem 1.0875rem 1.45rem',
      })}
    >
      {children()}
      <br />
    </div>

    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
