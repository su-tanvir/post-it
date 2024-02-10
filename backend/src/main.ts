import * as DbServer from './servers/db.server'
import WebServer from './servers/web.server'
import apiController from './controllers/api/api.controller'
import appController from './controllers/app.controller'
import dbController from './controllers/db/db.controller'
import postController from './controllers/api/post.controller'
import { ExceptionResponse, HttpNotFound } from './middlewares/error-handle.middleware'

DbServer.start()

WebServer.use(appController)
WebServer.use(apiController)
WebServer.use(postController)
WebServer.use(dbController)

// if the service route to offer is not found, return error
WebServer.use(HttpNotFound)
WebServer.use(ExceptionResponse)

export default WebServer
