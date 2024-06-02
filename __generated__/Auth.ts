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
  AuthControllerLogoutData,
  AuthControllerRefreshData,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Auth<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description [swagger 불가능, url 직접 이동] 카카오 서버에 로그인을 요청한다. 응답으로 도착한 kakaoId를 기반으로 jwt accessToken과 refreshToken을 클라이언트에게 쿠키로 전송한다
   *
   * @tags 인증 API
   * @name AuthControllerKakaoLogin
   * @summary 카카오 로그인
   * @request GET:/auth/login/kakao
   */
  authControllerKakaoLogin = (params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/auth/login/kakao`,
      method: 'GET',
      ...params,
    });
  /**
   * @description refreshToken을 기반으로 accessToken을 재발급한다.
   *
   * @tags 인증 API
   * @name AuthControllerRefresh
   * @summary accessToken refresh
   * @request GET:/auth/refresh-token
   * @secure
   */
  authControllerRefresh = (params: RequestParams = {}) =>
    this.request<AuthControllerRefreshData, void>({
      path: `/auth/refresh-token`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * @description 클라이언트의 로그인 관련 쿠키를 초기화한다.
   *
   * @tags 인증 API
   * @name AuthControllerLogout
   * @summary 로그아웃(clear cookie)
   * @request POST:/auth/logout
   * @secure
   */
  authControllerLogout = (params: RequestParams = {}) =>
    this.request<AuthControllerLogoutData, any>({
      path: `/auth/logout`,
      method: 'POST',
      secure: true,
      ...params,
    });
}
