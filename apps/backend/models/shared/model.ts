import { Model as SequelizeModel, Sequelize } from 'sequelize';

/**
 * Basic model to use to extend other models from.
 *
 * There are two static methods to init model:
 * 1. `static override initializeModel(sequelize: Sequelize): void {}` - required.
 * 2. `static associateModel(): void {}` - optional.
 * ```
 */
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
   * Create associations here (optional)
   */
  static associateModel(): void {
    // Do nothing if no associated models exist
  }
}
