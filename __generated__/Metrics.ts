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
import { PrometheusControllerIndexData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Metrics<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name PrometheusControllerIndex
   * @request GET:/metrics
   */
  prometheusControllerIndex = (params: RequestParams = {}) =>
    this.request<PrometheusControllerIndexData, any>({
      path: `/metrics`,
      method: 'GET',
      ...params,
    });
}
