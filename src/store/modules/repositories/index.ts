import { Reducer } from 'redux'
import { RepositoriesTypes, RepositoriesState } from './types'

const INITIAL_STATE: RepositoriesState = {
  data: {
    token: '',
    username: ''
  },
  error: false,
  loading: false,
  isLogin: false
}


const reducer: Reducer<RepositoriesState> = function (state = INITIAL_STATE, action): RepositoriesState {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case RepositoriesTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        isLogin: true,
        data: action.payload.data
      }
    case RepositoriesTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: true,
      };
    default:
      return state;
  }
}

export default reducer