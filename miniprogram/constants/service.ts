/** 请求超时时间 */
export const REQUEST_TIMEOUT = 60 * 1000

/** 默认的请求错误code */
export const DEFAULT_REQUEST_ERROR_CODE = 'DEFAULT'

/** 默认的请求错误文本 */
export const DEFAULT_REQUEST_ERROR_MSG = '请求错误!'

/** 默认的数据返回格式 */
export const DEFAULT_REQUEST_DATA_TYPE = 'json'

/** 请求成功的状态 */
export const HTTP_SUCCESS_STATE = 200

/** 请求不成功的http错误状态集合 */
export const HTTP_ERROR_STATUS = {
  400: '400: 请求出现语法错误~',
  401: '401: 用户未授权~',
  403: '403: 服务器拒绝访问~',
  404: '404: 请求的资源不存在~',
  405: '405: 请求方法未允许~',
  408: '408: 网络请求超时~',
  500: '500: 服务器内部错误~',
  501: '501: 服务器未实现请求功能~',
  502: '502: 服务挂起~',
  503: '503: 服务不可用~',
  504: '504: 网关超时~',
  505: '505: http版本不支持该请求~',
  [DEFAULT_REQUEST_ERROR_CODE]: DEFAULT_REQUEST_ERROR_MSG
}

/** 后端接口报错的code */
export const BACKEND_ERROR_CODE = 500

/** 后端接口成功的code */
export const BACKEND_SUCCESS_CODE = 200

/** 不需要弹出错误信息的code */
export const NO_ERROR_MSG_CODE: number[] = []

/** token失效需要刷新token的code */
export const REFRESH_TOKEN_CODE: number[] = []
