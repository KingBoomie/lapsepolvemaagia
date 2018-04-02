import React from 'react'
import { css } from 'emotion'

const Toetaja = props => (
  <div>
    <br />
    <h3>{props.firmanimi}</h3>
    <div>{props.logo}</div>
    <div>Toetaja kodulehega saate tutvuda {props.leht}</div>
    <br />
  </div>
)
export default Toetaja
