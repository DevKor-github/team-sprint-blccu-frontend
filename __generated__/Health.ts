/* eslint-disable */

/* tslint:disable */

/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
import { AppControllerHealthCheckData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Health<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags root
   * @name AppControllerHealthCheck
   * @summary health check
   * @request GET:/health
   */
  appControllerHealthCheck = (params: RequestParams = {}) =>
    this.request<AppControllerHealthCheckData, any>({
      path: `/health`,
      method: 'GET',
      ...params,
    });
}
