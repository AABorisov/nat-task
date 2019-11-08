export interface AuthorType {
  name: string;
  position: string;
  photo: string;
}
export interface PostType {
  id: number;
  published: boolean;
  title: string;
  content: string;
  additionalContent?: string;
  image: string;
  author: AuthorType;
}
