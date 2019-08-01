import React from 'react'
import Head from 'next/head'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default class Index extends React.Component {
  render () {
    return (
      <>
        <Head>
          <title>Rambo dashboard</title>
        </Head>
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
      </>
    )
  }
}
