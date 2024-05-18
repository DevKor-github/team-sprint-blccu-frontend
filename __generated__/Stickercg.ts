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
  MapCategoryDto,
  StickerCategoriesControllerCreateCategoryData,
  StickerCategoriesControllerFetchCategoriesData,
  StickerCategoriesControllerFetchStickersByCategoryNameData,
  StickerCategoriesControllerMapCategoryData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Stickercg<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description [어드민 전용] 스티커 카테고리를 만든다.
   *
   * @tags 스티커 카테고리 API
   * @name StickerCategoriesControllerCreateCategory
   * @summary 스티커 카테고리 생성
   * @request POST:/stickercg/create/{name}
   * @secure
   */
  stickerCategoriesControllerCreateCategory = (
    name: string,
    params: RequestParams = {},
  ) =>
    this.request<StickerCategoriesControllerCreateCategoryData, any>({
      path: `/stickercg/create/${name}`,
      method: 'POST',
      secure: true,
      ...params,
    });
  /**
   * @description [어드민 전용] 스티커에 카테고리를 매핑한다.
   *
   * @tags 스티커 카테고리 API
   * @name StickerCategoriesControllerMapCategory
   * @summary 스티커와 카테고리 매핑
   * @request POST:/stickercg/map
   * @secure
   */
  stickerCategoriesControllerMapCategory = (
    data: MapCategoryDto,
    params: RequestParams = {},
  ) =>
    this.request<StickerCategoriesControllerMapCategoryData, any>({
      path: `/stickercg/map`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 카테고리를 모두 조회한다.
   *
   * @tags 스티커 카테고리 API
   * @name StickerCategoriesControllerFetchCategories
   * @summary 카테고리 fetchAll
   * @request GET:/stickercg
   */
  stickerCategoriesControllerFetchCategories = (params: RequestParams = {}) =>
    this.request<StickerCategoriesControllerFetchCategoriesData, any>({
      path: `/stickercg`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 카테고리를 이름으로 찾고, 이에 매핑된 스티커들을 가져온다
   *
   * @tags 스티커 카테고리 API
   * @name StickerCategoriesControllerFetchStickersByCategoryName
   * @summary 카테고리 이름에 해당하는 스티커를 fetchAll
   * @request GET:/stickercg/fetch/{name}
   */
  stickerCategoriesControllerFetchStickersByCategoryName = (
    name: string,
    params: RequestParams = {},
  ) =>
    this.request<
      StickerCategoriesControllerFetchStickersByCategoryNameData,
      any
    >({
      path: `/stickercg/fetch/${name}`,
      method: 'GET',
      ...params,
    });
}
