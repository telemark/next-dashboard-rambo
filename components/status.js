'use strict'

import React from 'react'
import Panel from 'muicss/lib/react/panel'
const getData = require('../lib/get-data')

export default class Status extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  async componentDidMount () {
    const data = await getData(this.props.source)
    this.setState({data: data})
  }

  render () {
    return (
      <Panel>
        <h2>{this.props.title}</h2>
        <ul className='mui-list--unstyled'>
          {this.state.data.map((line) => {
            return (
              <li className='mui--text-display1'>{line.name}: {line.status}</li>
            )
          })}
        </ul>
      </Panel>
    )
  }
}
