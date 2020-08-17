/**
 *  Action Types
 */

export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

/**
 * Data Types
 */

export interface Repository {
  username: string;
  token: string;
}

/**
 * Request Types
 */

export interface RequestData {
  username: string;
  password: string;
}

/**
 * State Types
 */

export interface RepositoriesState {
  readonly data: Repository;
  readonly error: boolean;
  readonly loading: boolean
  readonly isLogin: boolean;
}