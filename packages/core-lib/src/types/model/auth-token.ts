import type { IdType } from '../id';

export type AuthTokenModelType = {
  id: IdType;
  userId: IdType;
  content: string;
  validUntil: string;
};
