import { PostWithId } from '@/definitions/post'
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

export type PostsContextProps = {
  posts: PostWithId[]
  setPosts: Dispatch<SetStateAction<PostWithId[]>>
  allPosts: boolean
  setAllPosts: Dispatch<SetStateAction<boolean>>
}

export const PostsContext = createContext({} as PostsContextProps)

interface PostsContextProviderProps {
  children: ReactNode
}

export const PostsContextProvider: FC<PostsContextProviderProps> = ({
  children,
}) => {
  const [posts, setPosts] = useState<PostWithId[]>([])
  const [allPosts, setAllPosts] = useState(false)

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        allPosts,
        setAllPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
