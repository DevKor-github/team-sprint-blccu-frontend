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
  FindStickerInput,
  ImageUploadDto,
  RemoveBgDto,
  StickersControllerCreatePrivateStickerData,
  StickersControllerCreatePublicStickerData,
  StickersControllerFetchPrivateStickersData,
  StickersControllerFetchPublicStickersData,
  StickersControllerRemoveBgData,
  StickersControllerRemoveS3Data,
  StickersControllerToggleReusableData,
  StickersControllerUpdateStickerData,
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
   * @description 블꾸에서 제작한 스티커를 업로드한다. 어드민 권한이 있는 유저 전용. 카테고리와 매핑을 해주어야 조회 가능.
   *
   * @tags 스티커 API
   * @name StickersControllerCreatePublicSticker
   * @summary [어드민용] 공용 스티커를 업로드한다.
   * @request POST:/stickers/public
   * @secure
   */
  stickersControllerCreatePublicSticker = (
    data: ImageUploadDto,
    params: RequestParams = {},
  ) =>
    this.request<StickersControllerCreatePublicStickerData, void>({
      path: `/stickers/public`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description 블꾸가 만든 스티커들을 fetch한다.
   *
   * @tags 스티커 API
   * @name StickersControllerFetchPublicStickers
   * @summary public 스티커를 fetch한다.
   * @request GET:/stickers/public
   */
  stickersControllerFetchPublicStickers = (params: RequestParams = {}) =>
    this.request<StickersControllerFetchPublicStickersData, any>({
      path: `/stickers/public`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 본인이 만든 스티커의 재사용 여부를 토글한다. 보관함 저장 혹은 삭제 용도로 사용할 것
   *
   * @tags 스티커 API
   * @name StickersControllerToggleReusable
   * @summary 스티커 재사용 여부를 토글한다.
   * @request POST:/stickers/toggle/{id}
   * @secure
   */
  stickersControllerToggleReusable = (id: number, params: RequestParams = {}) =>
    this.request<StickersControllerToggleReusableData, any>({
      path: `/stickers/toggle/${id}`,
      method: 'POST',
      secure: true,
      ...params,
    });
  /**
   * @description 스티커 배경을 제거하고, url을 받는다. 스티커에 적용하려면 update 필요. workflow: post('background') => delete('s3') => patch('image')
   *
   * @tags 스티커 API
   * @name StickersControllerRemoveBg
   * @summary 스티커 배경을 제거한다.
   * @request POST:/stickers/background
   * @secure
   */
  stickersControllerRemoveBg = (
    data: RemoveBgDto,
    params: RequestParams = {},
  ) =>
    this.request<StickersControllerRemoveBgData, any>({
      path: `/stickers/background`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 스티커 객체의 이미지 url을 변경한다. 호출 이전에 기존의 이미지 제거를 권장.
   *
   * @tags 스티커 API
   * @name StickersControllerUpdateSticker
   * @summary 스티커 객체 이미지 수정
   * @request PATCH:/stickers/image
   * @secure
   */
  stickersControllerUpdateSticker = (
    data: UpdateStickerInput,
    params: RequestParams = {},
  ) =>
    this.request<StickersControllerUpdateStickerData, any>({
      path: `/stickers/image`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description s3에 올라간 파일을 삭제한다. 스티커 객체가 삭제되지는 않는다.<br> sticker 객채에 새로운 이미지를 업데이트 해줄 때, 기존의 이미지를 제거할 때만 사용.<br> 로직 순서: delete('s3') => patch('image')<br> **만약 사용중인 객체의 이미지만 제거 할 경우 이미지가 깨진다.**
   *
   * @tags 스티커 API
   * @name StickersControllerRemoveS3
   * @summary s3에 업로드된 이미지 삭제
   * @request DELETE:/stickers/s3
   * @secure
   */
  stickersControllerRemoveS3 = (
    data: FindStickerInput,
    params: RequestParams = {},
  ) =>
    this.request<StickersControllerRemoveS3Data, any>({
      path: `/stickers/s3`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
