export const JSON_API_MEDIA_TYPE = 'application/vnd.api+json';

export const JSON_API_EXTENSION_DEFAULT = 'default';

export const JSON_API_PROFILE_DEFAULT = 'default';

export const enum HttpCodes {
  Success = 200,
  Created = 201,

  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  UnsupportedMediaType = 415,

  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
}
