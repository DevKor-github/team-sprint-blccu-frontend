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
  CreateStickerBlockDto,
  StickerBlocksControllerCreateStickerBlockData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class StickerBlocks<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 게시글과 스티커 아이디를 매핑한 스티커 블록을 생성한다. 세부 스타일 좌표값을 저장한다.
   *
   * @tags 스티커 블록 API
   * @name StickerBlocksControllerCreateStickerBlock
   * @summary 게시글 속 스티커 생성
   * @request POST:/stickerBlocks
   */
  stickerBlocksControllerCreateStickerBlock = (
    data: CreateStickerBlockDto,
    params: RequestParams = {},
  ) =>
    this.request<StickerBlocksControllerCreateStickerBlockData, any>({
      path: `/stickerBlocks`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
