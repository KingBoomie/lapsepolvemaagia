import React from 'react';
import { css } from 'emotion';

const Event = props => {
    console.log(props);
    const kirjeldused = props.kirjeldus.map((kirj, i) => <p key={i}>{kirj}</p>);
    return (
        <div>
        <h2
            className={css({
                filter: 'brightness(100%)',
                '&:hover': {
                    filter: 'brightness(95%)',
                },
                borderBottom: '2px solid #3FB74B',
                marginTop: '40',
                marginBottom: '30',
                paddingBottom: '20',
                //color: '#294C71'

            })}
        >
            <time>{props.kellaaeg}</time>
            &emsp;
            {props.tegevus}
        </h2>
        <div
            className={css({
                //fontSize: '24',
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'row',
                //alignItems: 'center',
                //textAlign: 'center'
            })}
        >
            <img src={props.pilt} alt="Sündmust kirjeldav pilt." width='200' height='200'/>
            <div>

            </div>
            <div
                className={css({
                    //fontSize: '20',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    paddingLeft: '100',
                    paddingRight: '50',
                    fontWeight: '600'
                })}
            >
                
                {kirjeldused}
            </div>
        </div>
        </div>
    );
};

export default Event