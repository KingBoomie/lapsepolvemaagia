import React from 'react';
import Link from 'gatsby-link';
import { cx, css } from 'emotion';

import HaapsaluMap from '../components/Map';
import TimeCounter from '../components/TimeCounter';

const DescriptionStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  fontWeight: '600',
  lineHeight: '1.8',
});

const IndexPage = () => (
  <div
    className={css(`
    display: grid;
    grid-gap: 2vmax;
    padding: 1vmax;
    grid-template-columns: 1fr;
    grid-template-areas: 
      "box"
      "map"
      "desc"
      "desc2";

    @media (min-width: 500px) {
      grid-template-columns: repeat(3,minmax(20vw, auto));
      grid-template-rows: minmax(20vw, auto);
      grid-template-areas:
        "desc map map"
        "box desc2 desc2";
      
    }
  `)}
  >
    <TimeCounter
      className={css(`grid-area: box`)}
      untill={new Date('2018-08-11T11:00:00+03:00')}
    />
    <HaapsaluMap
      className={css(`
      grid-area: map;
      height: 300px;
      @media (min-width: 600px) {
        height: 100%;
      }
    `)}
    />
    <div className={cx(DescriptionStyle, css({ gridArea: 'desc' }))}>
      <p>
        Lapsepõlvemaagia keskendub pärimusele ning Läänemaa tavadele,
        vanavanemate ja lastelaste lugudele ning koostegemisele.
      </p>
      <p>
        Tahame festivaliga näidata, et tähtis ei ole tehnoloogiline vidin, vaid
        koosveedetud aeg ning kuulatud tarkuseterad, mis on peidetud festivali
        melusse.
      </p>
      <p>
        Esinevad Läänemaa andekad lapsed ning toimuvad töötoad, töötoad, kus
        õpitakse päristöid.
      </p>
    </div>
    <div className={cx(DescriptionStyle, css({ gridArea: 'desc2' }))}>
      <p>Festivali sihtgrupiks on lapsed, nende vanemad ja vanavanemad.</p>
      <p>
        Festival viiakse läbi kultuurifestivalina, mille eesmärgiks on luua
        kontakt erinevate põlvkondade lapsepõlve mängude, muusika, tegevuste,
        reaalsete igapäevaelu tööde vahel.
      </p>
      <p>
        Ühest küljest on see tänaste laste LAPSEPÕLVEMAA ja teisalt kui
        jalutuskäik minevikku, et meenutada ja edasi anda pärandit.
      </p>
      <p>
        Suur roll on kohaidentiteedil – Läänemaa. Lapsepõlvemaagia on Haapsalu
        ja Läänemaa laste kultuurifestival, kus kohtuvad laul, tants, pillimäng,
        kunst ja töötoad.
      </p>
      <p> See on laste ja perede pidu.</p>
    </div>
  </div>
);

export default IndexPage;
