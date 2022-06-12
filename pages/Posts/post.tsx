import { Button } from 'react-bootstrap';
import IPost from '../../types/data';

export default function Post({ id, title, content }: IPost): JSX.Element {
  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button href={`/post/${id}`}>Show more</Button>
    </>
  )
}
