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
import { AnnouncementsControllerFetchAnmtsData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Anmts<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 공지 API
   * @name AnnouncementsControllerFetchAnmts
   * @summary 공지사항 조회
   * @request GET:/anmts
   */
  announcementsControllerFetchAnmts = (params: RequestParams = {}) =>
    this.request<AnnouncementsControllerFetchAnmtsData, any>({
      path: `/anmts`,
      method: 'GET',
      ...params,
    });
}
