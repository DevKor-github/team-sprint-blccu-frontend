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

export class NestjsMetrics<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name PrometheusControllerIndex
   * @request GET:/nestjs-metrics
   */
  prometheusControllerIndex = (params: RequestParams = {}) =>
    this.request<PrometheusControllerIndexData, any>({
      path: `/nestjs-metrics`,
      method: 'GET',
      ...params,
    });
}
