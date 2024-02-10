import { NextFunction, Request, Response } from 'express'

export const WelcomeReporter = (_req: Request, _res: Response, next: NextFunction) => {
  const TH = `
              ████████╗ ██╗   ██╗
                 ██╔══╝ ██║   ██║
                 ██║    ████████║
                 ██║    ██╔═══██║
                 ██║    ██║   ██║
                 ╚═╝    ╚═╝   ╚═╝\n\nPost It - Tanvir Hossain\n`
  console.log('%c' + TH, 'font-family:monospace;color:#ffb803;font-size:12px;')
  next()
}

// Register: client info (device, language, ...)
export const ClientReporter = (req: Request, _res: Response, next: NextFunction) => {
  const { headers, method, path, body } = req
  console.log('Reporter: ', headers['user-agent'], headers['content-language'], method, path, body)
  next()
}
