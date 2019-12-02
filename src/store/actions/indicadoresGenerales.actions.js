import { indicadoresGeneralesConstants } from '../constants';
import { indicadoresGeneralesService } from '../../services';

export const indicadoresGeneralesActions = {
    getAll
};

function getAll() {
    return dispatch => {
        dispatch(request());

        indicadoresGeneralesService.getAll()
            .then(
                indicadoresGenerales => dispatch(success(indicadoresGenerales)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: indicadoresGeneralesConstants.GETALL_REQUEST } }
    function success(indicadoresGenerales) { return { type: indicadoresGeneralesConstants.GETALL_SUCCESS, indicadoresGenerales } }
    function failure(error) { return { type: indicadoresGeneralesConstants.GETALL_FAILURE, error } }
}