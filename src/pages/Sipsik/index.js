import React from 'react'
import Riik from '../../components/Riik'
import pilt1 from '../Toetajad/imatra.png'
import pilt2 from '../Toetajad/garden.png';

const SipsikuPage = (props) => (
    <div>
      <h2>Sipsiku leht</h2>
        {console.log(props)}
        {
            props.data.allImageSharp.edges.map(({node}, index) =>(
                <Riik nimi={node.id} pilt={node.resolutions}/>
            ))
        }
      <Riik
      nimi="Eesti"
      pilt={pilt1}
      />
      <Riik
      nimi="Läti"
      pilt={pilt2}
      />
      
    </div>
)


export default SipsikuPage

export const query = graphql`
    query SipsikImageQuery {
        allImageSharp {
          edges {
            node {
              id
              
              ... on ImageSharp {
                resolutions(width:150, height:150) {
                  ...GatsbyImageSharpResolutions
                  
                }
              }
            }
          }
        }
      }
`