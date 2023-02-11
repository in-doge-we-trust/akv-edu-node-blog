import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env['PORT'] ? Number(process.env['PORT']) : 8080;

/**
 * DATABASE ENV
 */
export const DB_PORT = process.env['DB_PORT']
  ? Number(process.env['DB_PORT'])
  : 5432;
export const POSTGRES_USER = process.env['POSTGRES_USER'] ?? '';
export const POSTGRES_PASSWORD = process.env['POSTGRES_PASSWORD'] ?? '';
export const POSTGRES_DB = process.env['POSTGRES_DB'] ?? '';
