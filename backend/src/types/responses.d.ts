export interface ApiResponse<T> {
  data: T
}

export interface Message {
  message: string
}

export interface ErrorResponse extends Message {
  code: number
  stack?: string
}
