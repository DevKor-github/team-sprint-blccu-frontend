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
  EmitNotiInput,
  NotificationsControllerFetchNotiData,
  NotificationsControllerFetchNotiParams,
  NotificationsControllerSendClientAlarmData,
  NotificationsControllerSendNotiData,
  NotificationsControllerToggleNotiData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Notifications<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description [swagger 불가능, postman 권장] sse를 연결한다. 로그인된 유저를 타겟으로 하는 알림이 보내졌을경우 sse를 통해 전달받는다.
   *
   * @tags 알림 API
   * @name NotificationsControllerSendClientAlarm
   * @summary [SSE] 알림을 구독한다.
   * @request GET:/notifications/subscribe
   * @secure
   */
  notificationsControllerSendClientAlarm = (params: RequestParams = {}) =>
    this.request<NotificationsControllerSendClientAlarmData, any>({
      path: `/notifications/subscribe`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * @description 로그인된 유저들에게 보내진 알림들을 조회한다. query를 통해 알림 조회 옵션 설정. sse 연결 이전 이니셜 데이터 fetch 시 사용
   *
   * @tags 알림 API
   * @name NotificationsControllerFetchNoti
   * @summary 알림 조회
   * @request GET:/notifications
   * @secure
   */
  notificationsControllerFetchNoti = (
    query: NotificationsControllerFetchNotiParams,
    params: RequestParams = {},
  ) =>
    this.request<NotificationsControllerFetchNotiData, any>({
      path: `/notifications`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 알림을 읽음 처리한다.
   *
   * @tags 알림 API
   * @name NotificationsControllerToggleNoti
   * @summary 알림 읽기
   * @request POST:/notifications/{id}/read
   * @secure
   */
  notificationsControllerToggleNoti = (
    id: number,
    params: RequestParams = {},
  ) =>
    this.request<NotificationsControllerToggleNotiData, any>({
      path: `/notifications/${id}/read`,
      method: 'POST',
      secure: true,
      ...params,
    });
  /**
   * @description userId에게 알림을 보낸다. sse로 연결되어 있을 경우 실시간으로 fetch된다.
   *
   * @tags 알림 API
   * @name NotificationsControllerSendNoti
   * @summary userId에게 알림 생성
   * @request POST:/notifications/send/{userId}
   */
  notificationsControllerSendNoti = (
    userId: string,
    data: EmitNotiInput,
    params: RequestParams = {},
  ) =>
    this.request<NotificationsControllerSendNotiData, any>({
      path: `/notifications/send/${userId}`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
