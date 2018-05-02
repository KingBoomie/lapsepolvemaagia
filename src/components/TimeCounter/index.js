import React from 'react'
import { css } from 'emotion'

function getTimeLeft(firstDate) {
  const oneSecond = 1000
  const oneMinute = 60 * oneSecond
  const oneHour = 60 * oneMinute
  const oneDay = 24 * oneHour // hours*minutes*seconds*milliseconds

  const secondDate = new Date()
  const difference = firstDate.getTime() - secondDate.getTime()

  const days = Math.floor(difference / oneDay)
  const hours = Math.floor((difference / oneHour) % 24)
  const minutes = Math.floor((difference / oneMinute) % 60)
  const seconds = Math.floor((difference / oneSecond) % 60)
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
}
function getTimeText(timeObj) {
  const { days, hours, minutes, seconds } = timeObj
  const strings = [days, hours, minutes, seconds]
    .filter(n => n)
    .map(n => '' + n) // to string
    .map(s => s.padStart(2, '0'))
    .join(':')
  return strings
}

const BigBox = ({ children }) => (
  <div
    className={css({
      background: '#FEF105',
      color: '#294C71',
      fontSize: 'calc(40vw / 12)',
      padding: '5%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      /*boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
            '& p': {
                margin: 0,
            }*/
    })}
  >
    <h2
      className={css({
        color: '#294C71',
      })}
    >
      Festivali alguseni on jäänud...
    </h2>
    {children}
  </div>
)

class TimeCounter extends React.Component {
  componentDidMount() {
    this.useStupidJS()
    this.timer = setInterval(() => this.useStupidJS(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  getOutputText() {
    const timeLeft = getTimeLeft(this.props.untill)
    const timeText = getTimeText(timeLeft)
    return timeText
  }
  useStupidJS() {
    const text = this.getOutputText()
    document.getElementById('daysleft').innerHTML = `<p>${ text }</p>`
  }
  render() {
    return (
      <BigBox dangerouslySetInnerHTML={{ __html: '' }}>
        <span id={'daysleft'} />
      </BigBox>
    )
  }
}


export default TimeCounter
