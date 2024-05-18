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
import {
  ImageUploadDto,
  PostBackgroundsControllerDeleteData,
  PostBackgroundsControllerFetchAllData,
  PostBackgroundsControllerUploadImageData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Postbg<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags [잠정 사용X] 내지 API
   * @name PostBackgroundsControllerUploadImage
   * @summary 내지 업로드
   * @request POST:/postbg
   */
  postBackgroundsControllerUploadImage = (
    data: ImageUploadDto,
    params: RequestParams = {},
  ) =>
    this.request<PostBackgroundsControllerUploadImageData, any>({
      path: `/postbg`,
      method: 'POST',
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags [잠정 사용X] 내지 API
   * @name PostBackgroundsControllerFetchAll
   * @summary 내지 모두 불러오기
   * @request GET:/postbg
   */
  postBackgroundsControllerFetchAll = (params: RequestParams = {}) =>
    this.request<PostBackgroundsControllerFetchAllData, any>({
      path: `/postbg`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags [잠정 사용X] 내지 API
   * @name PostBackgroundsControllerDelete
   * @summary 내지 삭제하기
   * @request DELETE:/postbg/{id}
   */
  postBackgroundsControllerDelete = (id: string, params: RequestParams = {}) =>
    this.request<PostBackgroundsControllerDeleteData, any>({
      path: `/postbg/${id}`,
      method: 'DELETE',
      ...params,
    });
}
