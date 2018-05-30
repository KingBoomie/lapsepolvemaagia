import React from 'react'

import { request } from '../../utils/api.js'

class Siseveeb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {users: 0, oss: []}
        request().get('/user_stats').then(({ data }) => {
            console.log(data)
            const users_ = data.unique_users
            const oss_ = data.oss.map(os => <li>{os}</li>)
            this.setState({users:users_, oss: oss_})
        })
    }

    render() {
            return (
                <div>
                    <h2>Statistika külastajate kohta</h2>
                    <h4>Erineva browseriga külastajaid oli {this.state.users}</h4>
                    <h4>Kõikide külastajate erinevad operatsioonisüsteemid: </h4>
                    <ul>
                        {this.state.oss}
                    </ul>
                </div>
            )
        }
}


export default Siseveeb
