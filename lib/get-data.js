'use strict'

const fetch = require('isomorphic-fetch')

module.exports = async (url) => {
  const dataResponse = await fetch(url)
  const data = await dataResponse.json()
  return data
}
