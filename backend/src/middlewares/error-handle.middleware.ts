import { NextFunction, Request, Response } from 'express'
import { environment } from '../config/env'
import { ErrorResponse } from '../types/responses'

export const HttpNotFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404)
  const error = new Error(`Not Found: ${req.originalUrl}`)
  next(error)
}

// Standard to return the same error format
export const ExceptionResponse = (error: Error, _req: Request, res: Response<ErrorResponse>, _next: NextFunction) => {
  const mode = environment.APP_ENV
  const code = res.statusCode >= 400 ? res.statusCode : 500

  res.status(code).json({
    code: res.statusCode,
    message: mode === 'production' ? '' : error.message,
    stack: mode === 'production' ? '' : error.stack
  })
}
