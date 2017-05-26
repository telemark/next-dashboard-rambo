'use strict'

module.exports = {
  dataRambo: 'https://universal.status.tjeneste.win/json?url=https://tfk-livestats.firebaseio.com/rim-vigo-data-pull.json&fields=copies|errors|queue&title=Data',
  saksbehandlingRambo: 'https://universal.status.tjeneste.win/json?url=https://tfk-livestats.firebaseio.com/rim-vigo-saksbehandling.json&fields=queue|error|done|archive&title=Saksbehandling',
  arkivRambo: 'https://universal.status.tjeneste.win/json?url=https://tfk-livestats.firebaseio.com/rim-laurentius.json&fields=queue|errors|done|status&title=Arkiv',
  statusRambo: 'https://universal.status.tjeneste.win/json?url=https://tfk-livestats.firebaseio.com/rim-vigo-update-status.json&fields=queue|errors|done&title=Vigo'
}
