const axios = require('axios')

module.exports = async url => {
  const { data } = await axios(url)
  return data
}
