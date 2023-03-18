/* eslint-disable @typescript-eslint/no-namespace */

export namespace JsonApiTypes {
  type WithResourceId<T extends Record<string, unknown>> = T & {
    id: string;
  };

  export type JsonApiResourceObject<
    ResourceType extends string,
    ResourceAttributes extends Record<string, unknown>,
  > = {
    type: ResourceType;
    attributes?: ResourceAttributes;
  };

  export type JsonApiReadResourceObject<
    ResourceType extends string,
    ResourceAttributes extends Record<string, unknown>,
  > = WithResourceId<JsonApiResourceObject<ResourceType, ResourceAttributes>>;

  export type JsonApiCreateResourceObject<
    ResourceType extends string,
    ResourceAttributes extends Record<string, unknown>,
  > = JsonApiResourceObject<ResourceType, ResourceAttributes>;

  export type JsonApiUpdateResourceObject<
    ResourceType extends string,
    ResourceAttributes extends Record<string, unknown>,
  > = WithResourceId<
    JsonApiResourceObject<ResourceType, Partial<ResourceAttributes>>
  >;

  export type JsonApiSuccessfulResponseObject<
    ResourceType extends string,
    ResourceObjectAttributes extends Record<string, unknown>,
    DataType extends
      | (JsonApiResourceObject<ResourceType, ResourceObjectAttributes> | null)
      | JsonApiResourceObject<ResourceType, ResourceObjectAttributes>[],
  > = {
    data: DataType;
  };

  export type JsonApiErrorObject = {
    /**
     * Human-readable `statusCode` description.
     *
     * Example: `500` - `Internal server error`
     */
    status: string;
    /**
     * Human-readable `status` summary.
     *
     * Example: `Internal server error` - `Unknown error occurred on the server`
     */
    title: string;
    /**
     * Human-readable error explanation.
     *
     * Example: `Validation error - "name" should not contain any digits`
     */
    details?: string;
  };

  export type JsonApiErroneousResponseObject = {
    errors: JsonApiErrorObject[];
  };
}
