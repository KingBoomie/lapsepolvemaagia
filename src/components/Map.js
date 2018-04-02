import React from 'react'
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps'
import Spinner from 'react-spinkit'
import { css } from 'emotion'

const APIkey = 'AIzaSyALXza69sco4VYflMlzhEldIdgCsn8QN94'

export default props => (
  <InnerMap
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyALXza69sco4VYflMlzhEldIdgCsn8QN94&v=3.31&libraries=geometry,drawing,places"
    loadingElement={<Spinner name="folding-cube" />}
    containerElement={<div className={props.className} />}
    mapElement={<div className={css({ height: '100%' })} />}
  />
)

const InnerMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 58.94816969999999, lng: 23.53907730000003 }}
    >
      <Marker position={{ lat: 58.94816969999999, lng: 23.53907730000003 }} />
    </GoogleMap>
  ))
)
