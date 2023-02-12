import { DataTypes, Model, ModelAttributeColumnOptions } from 'sequelize';

export const idColumn: ModelAttributeColumnOptions<Model> = {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true,
  allowNull: false,
  unique: true,
};
