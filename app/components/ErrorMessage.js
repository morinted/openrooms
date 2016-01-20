import React from 'react'
import { Alert, Fade } from 'react-bootstrap'
import { t } from '../i18n'

class ErrorMessage extends React.Component {
  render () {
    return (<Fade
        style={this.props.style}
        in={this.props.msg && typeof this.props.msg === 'string'}
        unmountOnExit={true}>
        <Alert bsStyle="danger" className="cwc-error-message">
          <p>{ t(this.props.msg) }</p>
        </Alert>
      </Fade>)
  }
}

ErrorMessage.PropTypes =
  { msg: React.PropTypes.string
  }

export default ErrorMessage
