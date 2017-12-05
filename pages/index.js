import React from 'react'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default class Index extends React.Component {
  render () {
    return (
      <Layout>
        <Content source='https://stats.service.t-fk.no/stats/rambo' refresh='10' />
        <style jsx>
          {`
            div {
              flex-grow: 1;
              margin: 5px 10px 5px 10px;
            }
          `}
        </style>
      </Layout>
    )
  }
}
