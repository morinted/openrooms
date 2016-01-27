import React from 'react'
import { Table } from 'react-bootstrap'
import { t } from '../i18n'

export default class RoomTable extends React.Component {
  sorted = name =>
    name === this.props.col ? ' ↓' : '';
  render () {
    const { openRooms } = this.props
    const roomTable =
      openRooms.map(([ room, lock, next, isLab ]) =>
        <tr key={room}>
          <td>{room}{ isLab ? '*' : ''}</td>
          <td>{t(lock)}</td>
          <td>{t(next)}</td>
        </tr>
      )
    return (
      <Table>
        <thead>
          <tr>
            <th>{t('room')}{this.sorted('room')}</th>
            <th>{t('locks-at')}{this.sorted('locks-at')}</th>
            <th>{t('next-class')}{this.sorted('next-class')}</th>
          </tr>
        </thead>
        <tbody>
          {roomTable}
        </tbody>
      </Table>
    )
  }
  static PropTypes =
    { openRooms: React.PropTypes.array.isRequired
    , col: React.PropTypes.string.isRequired
    };
}
