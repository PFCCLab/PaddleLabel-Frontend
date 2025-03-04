/* tslint:disable */
/* eslint-disable */
/**
 * PaddleLabel API Specs
 * Web backend APIs for PaddleLabel
 *
 * The version of the OpenAPI document: 1.0.2
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
 * @interface Tag
 */
export interface Tag {
  /**
   *
   * @type {number}
   * @memberof Tag
   */
  tagId?: number;
  /**
   *
   * @type {number}
   * @memberof Tag
   */
  projectId?: number;
  /**
   *
   * @type {string}
   * @memberof Tag
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Tag
   */
  color?: string;
  /**
   *
   * @type {string}
   * @memberof Tag
   */
  comment?: string;
}

/**
 * Check if a given object implements the Tag interface.
 */
export function instanceOfTag(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function TagFromJSON(json: any): Tag {
  return TagFromJSONTyped(json, false);
}

export function TagFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tag {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    tagId: !exists(json, 'tag_id') ? undefined : json['tag_id'],
    projectId: !exists(json, 'project_id') ? undefined : json['project_id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    color: !exists(json, 'color') ? undefined : json['color'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
  };
}

export function TagToJSON(value?: Tag | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    tag_id: value.tagId,
    project_id: value.projectId,
    name: value.name,
    color: value.color,
    comment: value.comment,
  };
}
