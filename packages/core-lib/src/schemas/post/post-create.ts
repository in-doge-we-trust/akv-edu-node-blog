import { PostSchemaShape } from './post';

export const PostCreateSchemaShape = PostSchemaShape.pick({
  title: true,
  content: true,
});

export const PostCreateSchema = PostCreateSchemaShape;
