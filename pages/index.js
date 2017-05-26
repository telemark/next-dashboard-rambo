'use strict'

import React from 'react'
import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Head from '../components/head'
import Status from '../components/status'
const urls = require('../config/urls')

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Head />
        <Container fluid>
          <h1 className='mui--text-title'>RAMBO</h1>
          <Row>
            <Col md='3'>
              <Status title='Dokumenter' source={urls.dataRambo} refresh='10' />
            </Col>
            <Col md='3'>
              <Status title='Saksbehandling' source={urls.saksbehandlingRambo} refresh='10' />
            </Col>
            <Col md='3'>
              <Status title='Arkivering' source={urls.arkivRambo} refresh='10' />
            </Col>
            <Col md='3'>
              <Status title='Kvittering' source={urls.statusRambo} refresh='10' />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
