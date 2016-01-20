import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Grid, Row, Col } from 'react-bootstrap'

class App extends React.Component {
  render () {
    return (
      <section className="root">
        <section className="main">
          <Grid fluid>
            <Row className="cwc-header-row">
              <Col className="headerCol" xs={12} md={12}>
                <Header />
              </Col>
            </Row>

            <Row fluid className="mainRow">
              <div>
                <Col className="mainCol"
                    xs={12} md={12}>
                  <div style={{maxWidth: 760}}>
                    { this.props.children }
                  </div>
                </Col>
              </div>
            </Row>
          </Grid>
        </section>
        <Footer />
      </section>
    )
  }
}

App.contextTypes = { location: React.PropTypes.object.isRequired }

export default App
