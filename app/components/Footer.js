import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { t } from '../i18n'
export default class Footer extends React.Component {
  render () {
    const footerLines =
      t('footer-content')
        .split('\n')
        .map((x, i) => (<div key={i}>{ x }</div>))
    return (
      <footer className="cwc-footer">
        <Row>
          <Col className="cwc-centered" md={8} xs={12}>
            { footerLines }
          </Col>
        </Row>
      </footer>
    )
  }
}
