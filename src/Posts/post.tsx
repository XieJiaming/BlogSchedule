import { IPost } from '../types/data';

export default function Post({ title, content }: IPost): JSX.Element {
  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
    </>
  )
}
