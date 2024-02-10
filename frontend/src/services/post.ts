import { CreatePostDTO, GetPostsDTO, PostWithId } from '@/definitions/post'
import { baseApiURL } from './settings'

/**
 *
 * @param post
 * @returns 201: Created || 400: Bad Request || +500
 */
export const publishPostIt = (data: CreatePostDTO) => {
  return fetch(`${baseApiURL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) throw new Error('Something went wrong')
  })
}

/**
 *
 * @param limit
 * @returns 200: Created || +500
 */
export const getPosts = (options: GetPostsDTO = {}) => {
  const { limit = 5, page = 0 } = options

  const queryParams = `?limit=${limit}&offset=${page * limit}`

  return fetch(`${baseApiURL}/posts${queryParams}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error('Something went wrong')
      return response.json()
    })
    .then((response: { data: PostWithId[] }) => {
      // In this case, I believe that API will return this object
      // In case of doubt, it should be validated
      return response.data
    })
}
