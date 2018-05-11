import React from 'react'
import Img from 'gatsby-image'
import { css } from 'emotion'

class Riiginimi extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isHidden: true
        }
    }
    toggleHidden(){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render(){
        console.log(this.props.nimi);
        return(
            <div onClick={this.toggleHidden.bind(this)}>
                <h3>{this.props.nimi}</h3>
                {!this.state.isHidden && <Peidetav {...this.props}/>}
            </div>
        )
    }
}

const Peidetav= (props) => {
    console.log(props)
    const pildid = props.pilt.map((p, i) => <Img key={i} resolutions={p}/>);
    return(
    (
        <div
            className={css({
                display: 'flex',
                paddingRight: '20',
                flexDirection: 'row',
            })}
        >
            {pildid}
        </div>
    ))
};


export default Riiginimi