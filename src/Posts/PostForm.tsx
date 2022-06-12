import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { IPost } from '../types/data';

const PostForm = function (props: { updatePostList: (post: IPost) => void; }) {
  const { updatePostList } = props;
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async () => {
    const postData : IPost = { title, content }

    try {
      const response = await axios.post('http://localhost:3000/api/v1/posts', { post: postData })
      updatePostList(response.data)
    } catch (error: unknown) {
      console.log(error)
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register('title', { required: true })}
          type='text'
          name='title'
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors?.title?.type === 'required' && <p>This field is required</p>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          {...register('content', { required: true })}
          type='text'
          name='content'
          onChange={(e) => setContent(e.target.value)}
        />
        {errors?.content?.type === 'required' && <p>This field is required</p>}
      </Form.Group><br />

      <Button variant='primary' type='submit'>
        Submit
      </Button><hr />
    </Form>
  )
}

export default PostForm;
