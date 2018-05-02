import React from 'react'
import Img from 'gatsby-image'

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
        return(
            <div onClick={this.toggleHidden.bind(this)}>
                <h3>{this.props.nimi}</h3>
                {!this.state.isHidden && <Peidetav {...this.props}/>}
            </div>
        )
    }
}

const Peidetav= (props) => (
    <div className='modal'>
       <Img resolutions={props.pilt} alt="Sipsiku foto."/>
    </div>
)


export default Riiginimi