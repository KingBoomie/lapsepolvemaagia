import React from 'react'
import { css } from 'emotion';

const Vanavanemad = () => (
    <div>
      <h3>Osale küsitluses ja võida auhindu!</h3>
        <p>Aita meil teada saada, millised on Läänemaa vanavanemate seas kõige populaarsemad nimed!</p>
      <div
          className={css({
              fontWeight:"bold"
          })}
      >
        <form name="vanavanemad" method="post" action="/saadetud" netlify>
          Nimi:
          <p><input type="text" name="nimi"/></p>
          Vanus
          <p><input type="text" name="vanus"/></p>
          Vanaemade nimed:
          <p><input type="text" name="vanaema1"/></p>
          <p><input type="text" name="vanaema2"/></p>
          Vanaisade nimed:
          <p><input type="text" name="vanaisa1"/></p>
          <p><input type="text" name="vanaisa2"/></p>
          <p><input type="submit" value="Saada"/></p>
        </form>
      </div>
    </div>
)

export default Vanavanemad



