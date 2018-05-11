import React from 'react'
import Riik from '../../components/Riik'
import pilt1 from '../Toetajad/imatra.png'
import pilt2 from '../Toetajad/garden.png';

function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}

const SipsikuPage = (props) => {
    const riigidNimedega = props.data.allImageSharp.edges.map(({node}, index) => {
        const folderNames = node.id.split('/');
        const name = folderNames[folderNames.length-2];
        return [name, node.resolutions];
    })
    const riigidGroup = groupBy(riigidNimedega, ([nimi, pilt]) => nimi);    
    const riigid = Array.from(riigidGroup, ([riik, pildid]) => [riik,pildid.map(pilt => pilt[1])])
    const riigiPildid = riigid.map((([riik,pildid])=> <Riik nimi={riik} pilt={pildid}/>));
    return (
        <div>
            <h2>Sipsiku leht</h2>
            {console.log(props)}
            {
              riigiPildid  
            }

        </div>
    )
}


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