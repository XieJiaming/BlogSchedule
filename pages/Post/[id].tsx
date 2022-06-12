import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import IPost from '../../types/data';
import axios from 'axios';

export async function getServerSideProps({ params }: any) {
  // const response = await axios
  //   .get(`http://localhost:3000/api/v1/posts/${params.id}`)
  // const { data } = response;

  return {
    props: { id: params.id }
  };
}

export default function Post(id: IPost): JSX.Element {
  const [post, setPost] = useState({ title: '', content: '' })

  const getPost = async () => {
    try {
      const response = await axios
        .get(`http://localhost:3000/api/v1/posts/${id.id}}`)
      const { data } = response;

      setPost(data)
    } catch (error: unknown) {
    }
  }
  useEffect(() => {
    getPost();
  }, [])
  console.log(post)
  return (
    <>
      <div className='d-flex'>
        <h2>Title</h2>
        <p>{post.title}</p>
      </div>
      <div className="d-flex">
        <h2>Content</h2>
        <p>{post.content}</p>
      </div>
      <Button href='/posts'>Back to Posts</Button>
    </>
  )
}
