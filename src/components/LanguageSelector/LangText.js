import React from 'react';

const LangText = ({ lang, onClick, selected }) => (
  <a
    style={{
      color: '#294C71',
      marginRight: '10px',
      textDecoration: selected ? 'underline' : 'none',
      cursor: 'pointer',
    }}
    onClick={onClick}
  >
    {lang}
  </a>
);

export default LangText;
