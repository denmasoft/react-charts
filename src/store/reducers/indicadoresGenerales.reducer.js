import { indicadoresGeneralesConstants } from '../constants';

export function indicadoresGenerales(state = {}, action) {
  switch (action.type) {
    case indicadoresGeneralesConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case indicadoresGeneralesConstants.GETALL_SUCCESS:
      return {
        items: action.indicadoresGenerales
      };
    case indicadoresGeneralesConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}