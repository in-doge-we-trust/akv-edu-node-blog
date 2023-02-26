import { DataTypes, ModelAttributeColumnOptions } from 'sequelize';

type IdColumnConfigType = ModelAttributeColumnOptions;
type IdColumnMetaType = {
  COL_ID: string;
};
type IdColumn = {
  config: IdColumnConfigType;
  meta: IdColumnMetaType;
};

const idColumnMeta: IdColumnMetaType = {
  COL_ID: 'id',
};

export const idColumn: IdColumn = {
  config: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
    field: idColumnMeta.COL_ID,
  },
  meta: idColumnMeta,
};
