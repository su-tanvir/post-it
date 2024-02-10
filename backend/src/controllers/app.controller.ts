// Will control app routes through Express routes
import { Router, Request, Response } from 'express'
import path from 'path'
import { WelcomeReporter } from '../middlewares/logger.middleware'

const router = Router()
router.get('/', WelcomeReporter, (_req: Request, res: Response) => {
  res
    .setHeader('content-type', 'text/html')
    .sendFile(path.join(__dirname, '../views/index.html'))
})

export default router
