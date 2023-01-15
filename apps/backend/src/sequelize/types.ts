import type { Sequelize } from 'sequelize';

export type InitDBModelFnType = (sequelize: Sequelize) => void;

/**
 * Exclude Sequelize-related timestamps (`createdAt` and `updatedAt`) from type
 */
export type RemoveTimestamps<T> = Omit<T, 'createdAt' | 'updatedAt'>;
