import { Router, Request, Response } from 'express'
import path from 'path'

const router = Router()

router.get('/api', (_req: Request, res: Response) => {
  res.setHeader('content-type', 'text/html')
  res.sendFile(path.join(__dirname, '../../views/api.html'))
})

router.get('/api/version', (_req, res) => {
  const { version } = { version: '1.0.0' }
  res
    .writeHead(200, { 'Content-Type': 'application/json' })
    .end(JSON.stringify({ version }))
})

export default router
