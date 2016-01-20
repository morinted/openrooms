import React from 'react'
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap'
import { getRooms } from '../action/creators'
import RoomForm from '../components/RoomForm'
import RoomTable from '../components/RoomTable'
import { t } from '../i18n'

class RoomPage extends React.Component {
  componentWillMount () {
    document.title = `${t('navigation.open-rooms')} | ${t('_brand-styled')}`
  }
  render () {
    const { getRooms, openRooms, col } = this.props
    return (
      <Panel>
        <h1>{t('room-page-welcome')}</h1>
        <RoomForm
          onSubmit={getRooms}/>
        <RoomTable
          openRooms={openRooms}
          col={col}/>
      </Panel>
    )
  }
}

const mapStateToProps = state =>
  ({ openRooms: state.rooms.openRooms
   , col: state.rooms.col
   })

function mapDispatchToProps (dispatch) {
  return { getRooms: (d, h, m, c) => dispatch(getRooms(d, h, m, c)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage)
