import logger from 'winston'
import { kalisio } from '@kalisio/kdk-core'
import distribution from '@kalisio/feathers-distributed'
import fs from 'fs-extra'
import https from 'https'
import proxyMiddleware from 'http-proxy-middleware'
import express from '@feathersjs/express'
import middlewares from './middlewares'
import services from './services'
import hooks from './hooks'
import channels from './channels'

export class Server {
  constructor () {
    this.app = kalisio()
    let app = this.app

    // Distribute services
    const distConfig = app.get('distribution')
    if (distConfig) app.configure(distribution(distConfig))
    
    // Serve pure static assets
    if (process.env.NODE_ENV === 'production') {
      app.use('/', express.static('../dist/spa'))
    }
    // In dev this is done by the webpack server

    // Define HTTP proxies to your custom API backend. See /config/index.js -> proxyTable
    // https://github.com/chimurai/http-proxy-middleware
    const proxyTable = app.get('proxyTable') || {}
    if (proxyTable)
    Object.keys(proxyTable).forEach(context => {
      let options = proxyTable[context]
      if (typeof options === 'string') {
        options = { target: options }
      }
      app.use(proxyMiddleware(context, options))
    })
  }

  async run () {
    let app = this.app
    // First try to connect to DB
    await app.db.connect()
    // Set up our services
    await app.configure(services)
    // Register hooks
    app.hooks(hooks)
    // Set up real-time event channels
    app.configure(channels)
    // Configure middlewares - always has to be last
    app.configure(middlewares)

    // Last lauch server
    const httpsConfig = app.get('https')
    if (httpsConfig) {
      const port = httpsConfig.port
      let server = https.createServer({
        key: fs.readFileSync(httpsConfig.key),
        cert: fs.readFileSync(httpsConfig.cert)
      }, app)
      logger.info('Configuring HTTPS server at port ' + port.toString())
      await server.listen(port)
    } else {
      const port = app.get('port')
      logger.info('Configuring HTTP server at port ' + port.toString())
      await app.listen(port)
    }
  }
}
