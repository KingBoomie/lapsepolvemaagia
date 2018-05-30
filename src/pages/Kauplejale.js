import React from 'react'
import { css } from 'emotion'

const KauplejalePage = () => (
  <div>
    <h3>
      Kui soovite festivalil oma kaupa pakkuda, täitke palun järgnev ankeet.
    </h3>
    <div
      className={css({
        fontWeight: 'bold',
      })}
    >
      <form name="registreerimine" method="post" action="/saadetud" netlify>
        Nimi:
        <p>
          <input type="text" name="eesnimi" />
        </p>
        Ettevõte:
        <p>
          <input type="text" name="ettevõte" />
        </p>
        Telefoninumber:
        <p>
          <input type="text" name="telnr" />
        </p>
        Meiliaadress:
        <p>
          <input type="text" name="meil" />
        </p>
        Kauba kirjeldus:
        <p>
          <input type="text" name="kaup" />
        </p>
        Kauba/müügileti foto:
        <p
          className={css({
            fontWeight: 'normal',
          })}
        >
          <input type="file" name="foto" />
        </p>
        Arve saaja:
        <p>
          <input type="text" name="arve" />
        </p>
        Vajaminev pind m2:
        <p>
          <input type="text" name="pind" />
        </p>
        Kas vajate müügikohas elektrit?
        <p
          className={css({
            fontWeight: 'normal',
          })}
        >
          Vajan elektrit<input type="radio" name="gender" value="male" />
        </p>
        <p
          className={css({
            fontWeight: 'normal',
          })}
        >
          Ei vaja elektrit<input type="radio" name="gender" value="female" />
        </p>
        Ettevõtte aadress:
        <p>
          <input type="text" name="aadress" />
        </p>
        <input type="submit" value="Saada" />
      </form>
    </div>
  </div>
)

export default KauplejalePage
