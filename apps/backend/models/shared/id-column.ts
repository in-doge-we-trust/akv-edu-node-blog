import { DataTypes, ModelAttributeColumnOptions } from 'sequelize';

export const idColumn: ModelAttributeColumnOptions = {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true,
  allowNull: false,
  unique: true,
};
