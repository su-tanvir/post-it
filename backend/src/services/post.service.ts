import { CreatePostDTO, GetPostsDTO, PostID, PostWithId, UpdatePostDTO } from '../types/post'
import Post from '../models/post'
import { environment } from '../config/env'

// import postData from '../mocks/posts.mock.json'
// const posts = postData as PostDTOWithId[]

export const getPosts = async (options: GetPostsDTO = {}): Promise<PostWithId[]> => {
  const { limit, offset } = options
  const posts = await Post.find({})
    .limit(Number(limit))
    .skip((Number(offset)))
  return posts
}

export const deletePosts = async (): Promise<void> => {
  if (environment.APP_ENV === 'development') {
    await Post.deleteMany({})
  } else {
    throw new Error('Whoops, cannot be deleted!')
  }
}

export const addPost = async (newPost: CreatePostDTO): Promise<PostWithId> => {
  const res = await Post.create(newPost)
  return res
}

export const findPost = async (postId: PostID): Promise<PostWithId> => {
  const res = await Post.findById({ _id: postId }).exec()
  if (res != null) return res
  throw new Error(`Post ${postId} not found`)
}

export const updatePost = async (postId: PostID, data: UpdatePostDTO): Promise<PostWithId> => {
  const res = await Post.findOneAndUpdate(
    { _id: postId },
    { $set: data },
    { new: true })
  if (res != null) return res
  throw new Error(`Post ${postId} not found`)
}

export const removePost = async (postId: PostID): Promise<void> => {
  const res = await Post.findOneAndRemove({ _id: postId })
  if (res == null) throw new Error(`Post ${postId} not found`)
}
