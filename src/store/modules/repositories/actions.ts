import { action } from 'typesafe-actions'
import { RepositoriesTypes, Repository, RequestData } from './types'
/**
 * 请求发起时
 */
export const loadRequest = (options: RequestData) => action(RepositoriesTypes.LOAD_REQUEST, options)

/**
 * 响应
 */

export const loadScuccess = (data: Repository) => action(RepositoriesTypes.LOAD_SUCCCES, data)

/**
 * 发生错误
 */

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE)
