import cors from 'cors'
import express, { Express } from 'express'
import { environment } from '../config/env'

const server: Express = express()
const port = environment.HTTP_SERVER_PORT
const mode = environment.APP_ENV

server.set('port', port)
server.set('env', mode)

// CORS: to allow any domain to get the server's resources
// i.e: from https://github.com, call: fetch('http://localhost:8080/api.html').then(async (res) => await res.text()).then((res) => console.log(res))
// i.e: apply specific route: server.get('/x', cors(), (req, res, next) => { ...});
// whitelist vs blacklist
server.use(cors({
  origin: '*'
}))

// configure Express to serve static files, i.e: http://localhost:8080/api.html
// static files of src/views will be mapped to "/"
server.use('/', express.static('src/views'))

// body parsing middleware: apply in req.body
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

/**
 * Start Express server to listen on port ${port} in ${mode} mode
 * Press CTRL-C to stop
 */
server.listen(port)

export default server
