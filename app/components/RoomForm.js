import React from 'react'
import { Input, Row, Col } from 'react-bootstrap'
import { t } from '../i18n'
import { days, times, cols } from '../constants'
import { hmToString, parseTime } from '../scripts/util'

export default class RoomForm extends React.Component {
  constructor (props) {
    super()
    const { onSubmit } = props
    const date = new Date()
    const day = days[date.getDay()]
    const col = cols[0]
    let hour = date.getHours()
    let minute = date.getMinutes()
    const rem = 10 - minute % 10
    if (rem !== 10) {
      minute += rem
      if (minute === 60) {
        hour += 1
        minute = 0
      }
    }
    this.state =
      { day
      , hour
      , minute
      , col
      }
    onSubmit(day, hour, minute, col)
  }
  render () {
    const { day, hour, minute } = this.state
    const nowString = hmToString(hour, minute)

    return (
      <Row>
        <Col xs={12} md={6}>
        <Input type="select"
               label={t('day')}
               defaultValue={day}
               onChange={this.updateDay}>
          {days.map(x =>
            <option key={x} value={x}>
              {t(x)}
            </option>
          )}
        </Input>
      </Col>
      <Col xs={12} md={6}>
        <Input type="select"
               label={t('time')}
               defaultValue={nowString}
               onChange={this.updateTime}>
          {times.map(x =>
            <option key={x} value={x}>
              {t(x)}
            </option>
          )}
        </Input>
      </Col>
      <Col xs={12} md={6}>
        <Input type="select"
               label={t('sort-by')}
               defaultValue={cols[0]}
               onChange={this.updateCol}>
          {cols.map(x =>
            <option key={x} value={x}>
              {t(x)}
            </option>
          )}
        </Input>
      </Col>
      </Row>
    )
  }
  updateCol = e => {
    const { value: col } = e.target
    const { day, hour, minute } = this.state
    this.setState({ col })
    this.props.onSubmit(day, hour, minute, col)
  };
  updateDay = e => {
    const { value: day } = e.target
    const { hour, minute, col } = this.state
    this.setState({ day })
    this.props.onSubmit(day, hour, minute, col)
  };
  updateTime = e => {
    const { value: time } = e.target
    const { day, col } = this.state
    const [ hour, minute ] = parseTime(time)
    this.setState({ hour, minute })
    this.props.onSubmit(day, hour, minute, col)
  };
  static PropTypes =
    { onSubmit: React.PropTypes.func.isRequired
    };
}
