import { Model as SequelizeModel, Sequelize } from 'sequelize';

export abstract class Model<
  // eslint-disable-next-line @typescript-eslint/ban-types
  ModelAttributes extends {},
  // eslint-disable-next-line @typescript-eslint/ban-types
  CreationAttributes extends {},
> extends SequelizeModel<ModelAttributes, CreationAttributes> {
  /**
   * Override this and pass `sequelize` instance as a params,
   * in order to bind the model to the `sequelize` instance
   */
  static initializeModel(sequelize: Sequelize): void;
  static initializeModel(): void {
    throw new Error('"initializeModel" is not implemented!');
  }

  /**
   * Create associations here
   */
  static associateModel(): void {
    throw new Error('"associateModel" is not implemented');
  }
}
