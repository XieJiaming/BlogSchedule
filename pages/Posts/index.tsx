import { useState, useEffect } from 'react'
import axios from 'axios';
import Post from './post'
import PostForm from './PostForm'
import IPost from '../../types/data'

export default function Posts() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isUpdate, setUpdate] = useState<boolean>(false)

  const getPosts = async () => {
    try {
      const response = await axios
        .get('http://localhost:3000/api/v1/posts')

      const { data } = response;

      setPosts(data.reverse())
    } catch (error: unknown) {
      console.log(error)
    }
  }

  const updatePostList = (post: IPost) => {
    const tmpPosts = posts;
    tmpPosts.unshift(post);
    setPosts(tmpPosts);

    setUpdate(true)
  }

  useEffect(() => {
    getPosts()
    setUpdate(false)
  }, [isUpdate])

  return (
    <>
      <PostForm updatePostList={updatePostList} />

      <h1>Post List</h1>
      {posts.map((post: IPost) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
        />
      ))}
    </>
  )
}
