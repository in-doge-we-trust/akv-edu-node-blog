import { z } from 'zod';

const WithResourceIdSchemaMixin = z.object({
  id: z.string().uuid(),
});

function buildJsonApiResourceObjectSchema<
  ResourceType extends string,
  ResourceAttributesSchema extends
    | z.ZodObject<Record<string, z.ZodTypeAny>>
    | undefined,
>(
  resourceType: ResourceType,
  resourceAttributesSchema?: ResourceAttributesSchema,
) {
  if (!resourceAttributesSchema) {
    return z.object({
      type: z.custom<ResourceType>((value) => value === resourceType),
    });
  }

  return z.object({
    type: z.custom<ResourceType>((value) => value === resourceType),
    attributes: resourceAttributesSchema,
  });
}

export function buildJsonApiReadResourceObjectSchema<
  ResourceType extends string,
  ResourceAttributesSchema extends z.ZodObject<Record<string, z.ZodTypeAny>>,
>(
  resourceType: ResourceType,
  resourceAttributesSchema: ResourceAttributesSchema,
) {
  return buildJsonApiResourceObjectSchema(
    resourceType,
    resourceAttributesSchema,
  ).merge(WithResourceIdSchemaMixin);
}

export function buildJsonApiReadResponseObjectSchema<
  ResourceType extends string,
  ResourceAttributesSchema extends z.ZodObject<Record<string, z.ZodTypeAny>>,
>(
  resourceType: ResourceType,
  resourceAttributesSchema: ResourceAttributesSchema,
  resourceObjectsCount: 'one' | 'many',
) {
  switch (resourceObjectsCount) {
    case 'one':
      return z.object({
        data: buildJsonApiReadResourceObjectSchema(
          resourceType,
          resourceAttributesSchema,
        ),
      });
    case 'many':
      return z.object({
        data: z.array(
          buildJsonApiReadResourceObjectSchema(
            resourceType,
            resourceAttributesSchema,
          ),
        ),
      });
    default:
      throw new Error(
        `"resourceObjectsCount" should be either "one" or "many"!`,
      );
  }
}

export function buildJsonApiCreateResourceObjectSchema<
  ResourceType extends string,
  ResourceAttributesSchema extends z.ZodObject<Record<string, z.ZodTypeAny>>,
>(
  resourceType: ResourceType,
  resourceAttributesSchema: ResourceAttributesSchema,
) {
  return buildJsonApiResourceObjectSchema(
    resourceType,
    resourceAttributesSchema,
  );
}

export function buildJsonApiCreateRequestObjectSchema<
  ResourceType extends string,
  ResourceAttributesSchema extends z.ZodObject<Record<string, z.ZodTypeAny>>,
>(
  resourceType: ResourceType,
  resourceAttributesSchema: ResourceAttributesSchema,
) {
  return z.object({
    data: buildJsonApiCreateResourceObjectSchema(
      resourceType,
      resourceAttributesSchema,
    ),
  });
}

export function buildJsonApiCreateResponseObjectSchema<
  ResourceType extends string,
  ResourceAttributesSchema extends z.ZodObject<Record<string, z.ZodTypeAny>>,
>(
  resourceType: ResourceType,
  resourceAttributesSchema: ResourceAttributesSchema,
) {
  return z.object({
    data: buildJsonApiReadResourceObjectSchema(
      resourceType,
      resourceAttributesSchema,
    ),
  });
}

export function buildJsonApiUpdateResourceObjectSchema<
  ResourceType extends string,
  ResourceAttributesSchema extends z.ZodObject<Record<string, z.ZodTypeAny>>,
>(
  resourceType: ResourceType,
  resourceAttributesSchema?: ResourceAttributesSchema,
) {
  if (!resourceAttributesSchema) {
    return buildJsonApiResourceObjectSchema(resourceType).merge(
      WithResourceIdSchemaMixin,
    );
  }

  return buildJsonApiResourceObjectSchema(
    resourceType,
    resourceAttributesSchema.partial(),
  ).merge(WithResourceIdSchemaMixin);
}

export function buildJsonApiUpdateRequestObjectSchema<
  ResourceType extends string,
  ResourceAttributesSchema extends z.ZodObject<Record<string, z.ZodTypeAny>>,
>(
  resourceType: ResourceType,
  resourceAttributesSchema: ResourceAttributesSchema,
) {
  return z.object({
    data: buildJsonApiUpdateResourceObjectSchema(
      resourceType,
      resourceAttributesSchema,
    ),
  });
}

export function buildJsonApiUpdateResponseObjectSchema<
  ResourceType extends string,
  ResourceAttributesSchema extends z.ZodObject<Record<string, z.ZodTypeAny>>,
>(
  resourceType: ResourceType,
  resourceAttributesSchema: ResourceAttributesSchema,
) {
  return z.object({
    data: buildJsonApiReadResourceObjectSchema(
      resourceType,
      resourceAttributesSchema,
    ),
  });
}

export function buildJsonApiDeleteResourceObjectSchema() {
  return z.null();
}

export function buildJsonApiDeleteResponseObjectSchema() {
  return z.object({
    data: buildJsonApiDeleteResourceObjectSchema(),
  });
}

export const JsonApiErrorObjectSchema = z.object({
  status: z.string(),
  title: z.string(),
  details: z.string().optional(),
});

export const JsonApiErroneousResponseObjectSchema = z.object({
  errors: z.array(JsonApiErrorObjectSchema),
});
