import type { Sequelize } from 'sequelize';

export type InitDBModelFnType = (sequelize: Sequelize) => void;

export type RemoveTimestamps<T> = Omit<T, 'createdAt' | 'updatedAt'>;
