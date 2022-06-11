/* tslint:disable */
/* eslint-disable */
/**
 * PP-Label API Spec
 * Back end APIs for PP-Label
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: me@linhan.email
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface ImportDatasetRequest
 */
export interface ImportDatasetRequest {
  /**
   *
   * @type {string}
   * @memberof ImportDatasetRequest
   */
  importDir?: string;
}

export function ImportDatasetRequestFromJSON(json: any): ImportDatasetRequest {
  return ImportDatasetRequestFromJSONTyped(json, false);
}

export function ImportDatasetRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ImportDatasetRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    importDir: !exists(json, 'import_dir') ? undefined : json['import_dir'],
  };
}

export function ImportDatasetRequestToJSON(value?: ImportDatasetRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    import_dir: value.importDir,
  };
}
