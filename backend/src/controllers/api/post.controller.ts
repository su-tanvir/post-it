// Contract: return JSON response
import { NextFunction, Request, RequestHandler, Response, Router } from 'express'
import { ApiResponse } from '../../types/responses'
import { addPost, deletePosts, findPost, getPosts, removePost, updatePost } from '../../services/post.service'
import { PostWithId } from '../../types/post'
import { parseGetPostsRequestQuery, toNewPost, toUpdatePostValues } from '../../utils/post.validation'

const router = Router()

router.get('/api/posts', (req: Request, res: Response<ApiResponse<PostWithId[]>>, next: NextFunction) => {
  const query = parseGetPostsRequestQuery(req.query)
  getPosts(query)
    .then((posts) => res.status(200).json({ data: posts }))
    .catch((error: Error) => next(error))
})

router.delete('/api/posts', (async (_req: Request, res: Response, next: NextFunction) => {
  try {
    await deletePosts()
    res.status(204).end()
  } catch (error) {
    next(error)
  }
}) as RequestHandler)

router.post('/api/posts', (req: Request, res: Response<ApiResponse<PostWithId>>, next: NextFunction) => {
  const newPost = toNewPost(req.body)
  addPost(newPost)
    .then((post) => res.status(201).json({ data: post }))
    .catch(next)
})

router.get('/api/posts/:id', (req: Request, res: Response<ApiResponse<PostWithId>>, next: NextFunction) => {
  findPost(req.params.id)
    .then((post) => res.status(200).json({ data: post }))
    .catch((error) => next(error))
})

router.put('/api/posts/:id', (req: Request, res: Response<ApiResponse<PostWithId>>, next: NextFunction) => {
  const { id } = req.params
  const postValues = toUpdatePostValues(req.body)
  updatePost(id, postValues)
    .then((modifiedPost) => res.status(200).json({ data: modifiedPost }))
    .catch(next)
})

router.delete('/api/posts/:id', (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  removePost(id)
    .then(() => res.status(204).end())
    .catch(next)
})

export default router
