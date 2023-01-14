import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env['PORT'] ? Number(process.env['PORT']) : 8080;

export const POSTGRES_USER = process.env['POSTGRES_USER'] ?? '<username>';
export const POSTGRES_PASSWORD =
  process.env['POSTGRES_PASSWORD'] ?? '<password>';
export const POSTGRES_PORT = process.env['POSTGRES_PORT']
  ? Number(process.env['POSTGRES_PORT'])
  : 5432;
export const POSTGRES_DB = process.env['POSTGRES_DB'] ?? 'akv_edu_node_blog_db';
