import { PostSchemaShape } from './post';

export const PostUpdateSchemaShape = PostSchemaShape.pick({
  title: true,
  content: true,
});

export const PostUpdateSchema = PostUpdateSchemaShape;
