import { Router, Request, Response } from 'express'
import path from 'path'

const router = Router()

router.get('/db', (_req: Request, res: Response) => {
  res.setHeader('content-type', 'text/html')
  res.sendFile(path.join(__dirname, '../../views/db.html'))
})

export default router
