/* tslint:disable */
/* eslint-disable */
/**
 * PaddleLabel API Specs
 * Back end APIs for PP-Label
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: me@linhan.email
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import type { Points2polygonRequest, SetAllRequest } from '../models';
import {
  Points2polygonRequestFromJSON,
  Points2polygonRequestToJSON,
  SetAllRequestFromJSON,
  SetAllRequestToJSON,
} from '../models';

export interface Points2polygonOperationRequest {
  points2polygonRequest?: Points2polygonRequest;
}

export interface PrintDebugIdRequest {
  debugId: string;
}

export interface SetAllOperationRequest {
  projectId: string;
  setAllRequest?: SetAllRequest;
}

/**
 *
 */
export class DefaultApi extends runtime.BaseAPI {
  /**
   *
   */
  async points2polygonRaw(
    requestParameters: Points2polygonOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<string>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/rpc/seg/points2polygon`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: Points2polygonRequestToJSON(requestParameters.points2polygonRequest),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   *
   */
  async points2polygon(
    points2polygonRequest?: Points2polygonRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<string>> {
    const response = await this.points2polygonRaw(
      { points2polygonRequest: points2polygonRequest },
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Your GET endpoint
   */
  async printDebugIdRaw(
    requestParameters: PrintDebugIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.debugId === null || requestParameters.debugId === undefined) {
      throw new runtime.RequiredError(
        'debugId',
        'Required parameter requestParameters.debugId was null or undefined when calling printDebugId.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/debug/printid/{debug_id}`.replace(
          `{${'debug_id'}}`,
          encodeURIComponent(String(requestParameters.debugId)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Your GET endpoint
   */
  async printDebugId(
    debugId: string,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.printDebugIdRaw({ debugId: debugId }, initOverrides);
  }

  /**
   *
   */
  async setAllRaw(
    requestParameters: SetAllOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter requestParameters.projectId was null or undefined when calling setAll.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/projects/{project_id}/tasks`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters.projectId)),
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: SetAllRequestToJSON(requestParameters.setAllRequest),
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   *
   */
  async setAll(
    projectId: string,
    setAllRequest?: SetAllRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.setAllRaw({ projectId: projectId, setAllRequest: setAllRequest }, initOverrides);
  }
}
