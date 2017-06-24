const pino = require('pino')

const logger = pino({
  name: 'xliff-converter',
  serializers: Object.assign({}, pino.stdSerializers),
  level: 'info',
})

module.exports = logger