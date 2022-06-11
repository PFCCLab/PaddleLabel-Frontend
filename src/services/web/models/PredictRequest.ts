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
 * @interface PredictRequest
 */
export interface PredictRequest {
  /**
   *
   * @type {string}
   * @memberof PredictRequest
   */
  mlBackendUrl: string;
  /**
   *
   * @type {string}
   * @memberof PredictRequest
   */
  model: string;
  /**
   * Default false. Will b64 encode image and send to ml backend in this case. Images are directly encoded as file.
   * If the ml backend has read access to project data dir, set same_server to true. This case web backend will send file path to ml backend. Reduce b64 en/decode overhead.
   * @type {boolean}
   * @memberof PredictRequest
   */
  sameServer?: boolean;
  /**
   * Default false. Create label if model prediction not in current labels. Won't save prediction result in db if prediciont label not present in current labels
   * @type {boolean}
   * @memberof PredictRequest
   */
  createLabel?: boolean;
}

export function PredictRequestFromJSON(json: any): PredictRequest {
  return PredictRequestFromJSONTyped(json, false);
}

export function PredictRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PredictRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    mlBackendUrl: json['ml_backend_url'],
    model: json['model'],
    sameServer: !exists(json, 'same_server') ? undefined : json['same_server'],
    createLabel: !exists(json, 'create_label') ? undefined : json['create_label'],
  };
}

export function PredictRequestToJSON(value?: PredictRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    ml_backend_url: value.mlBackendUrl,
    model: value.model,
    same_server: value.sameServer,
    create_label: value.createLabel,
  };
}
