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
  StickerCategoriesControllerFetchCategoriesData,
  StickerCategoriesControllerFetchStickersByCategoryNameData,
  StickersControllerCreatePrivateStickerData,
  StickersControllerDeleteStickerData,
  StickersControllerFetchPrivateStickersData,
  StickersControllerFetchPublicStickersData,
  StickersControllerPatchStickerData,
  UpdateStickerInput,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Stickers<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 개인만 조회 가능한 유저용 스티커를 업로드한다.
   *
   * @tags 스티커 API
   * @name StickersControllerCreatePrivateSticker
   * @summary [유저용] 개인 스티커를 업로드한다.
   * @request POST:/stickers/private
   * @secure
   */
  stickersControllerCreatePrivateSticker = (
    data: ImageUploadDto,
    params: RequestParams = {},
  ) =>
    this.request<StickersControllerCreatePrivateStickerData, any>({
      path: `/stickers/private`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description 본인이 만든 재사용 가능한 스티커들을 fetch한다. toggle이 우선적으로 이루어져야함.
   *
   * @tags 스티커 API
   * @name StickersControllerFetchPrivateStickers
   * @summary 재사용 가능한 private 스티커를 fetch한다.
   * @request GET:/stickers/private
   * @secure
   */
  stickersControllerFetchPrivateStickers = (params: RequestParams = {}) =>
    this.request<StickersControllerFetchPrivateStickersData, any>({
      path: `/stickers/private`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * @description 본인이 만든 스티커를 patch한다. image_url 변경 시 기존의 이미지는 s3에서 제거된다.
   *
   * @tags 스티커 API
   * @name StickersControllerPatchSticker
   * @summary 스티커의 image_url 혹은 재사용 여부를 설정한다.
   * @request PATCH:/stickers/{id}
   * @secure
   */
  stickersControllerPatchSticker = (
    id: number,
    data: UpdateStickerInput,
    params: RequestParams = {},
  ) =>
    this.request<StickersControllerPatchStickerData, any>({
      path: `/stickers/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 스티커를 삭제한다.
   *
   * @tags 스티커 API
   * @name StickersControllerDeleteSticker
   * @summary 스티커 삭제
   * @request DELETE:/stickers/{id}
   * @secure
   */
  stickersControllerDeleteSticker = (id: number, params: RequestParams = {}) =>
    this.request<StickersControllerDeleteStickerData, any>({
      path: `/stickers/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description 블꾸가 만든 스티커들을 fetch한다.
   *
   * @tags 스티커 API
   * @name StickersControllerFetchPublicStickers
   * @summary public 스티커를 fetch한다.
   * @request GET:/stickers
   */
  stickersControllerFetchPublicStickers = (params: RequestParams = {}) =>
    this.request<StickersControllerFetchPublicStickersData, any>({
      path: `/stickers`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 카테고리를 모두 조회한다.
   *
   * @tags 스티커 API
   * @name StickerCategoriesControllerFetchCategories
   * @summary 카테고리 fetchAll
   * @request GET:/stickers/categories
   */
  stickerCategoriesControllerFetchCategories = (params: RequestParams = {}) =>
    this.request<StickerCategoriesControllerFetchCategoriesData, any>({
      path: `/stickers/categories`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 카테고리를 id로 찾고, 이에 매핑된 스티커들을 가져온다
   *
   * @tags 스티커 API
   * @name StickerCategoriesControllerFetchStickersByCategoryName
   * @summary 카테고리 id에 해당하는 스티커를 fetchAll
   * @request GET:/stickers/categories/{id}
   */
  stickerCategoriesControllerFetchStickersByCategoryName = (
    id: string,
    params: RequestParams = {},
  ) =>
    this.request<
      StickerCategoriesControllerFetchStickersByCategoryNameData,
      any
    >({
      path: `/stickers/categories/${id}`,
      method: 'GET',
      ...params,
    });
}
