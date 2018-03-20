import React from 'react'
import { css } from 'emotion'

function getDaysLeft(untill) {
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var firstDate = untill || new Date(2018, 7, 11);
    var secondDate = new Date();
  
    var diffDays = Math.round(
      Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
    )
  
    return diffDays
  }

const BigBox = ({ children }) => (
    <div
      className={css({
        background: '#fef102',
        color: 'blue',
        fontSize: '6vw',
        padding: '5%',
        textAlign: 'center',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        '& p': {
            margin: 0,
        }
      })}
    >
        { children }
    </div>
)


class TimeCounter extends React.Component {
    componentDidMount() {
        this.useStupidJS()
        this.timer = setInterval(() => this.useStupidJS(), 10000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    getOutputText() {
        const days = getDaysLeft(this.props.untill)
        return "" + days + " päeva festivalini"
    }
    useStupidJS() {
        const text = this.getOutputText()
        document.getElementById('daysleft').innerHTML = '<p>' + text + '</p>'
    }
    render() {
        return (
            <BigBox dangerouslySetInnerHTML={{ __html:''}}>
                <span id={"daysleft"} />
            </BigBox>
        )
    }
}



export default TimeCounter