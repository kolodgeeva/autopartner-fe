import * as A from '../../../actions/car/brand/deleteCarBrandDialog';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {Stack} from 'immutable';
import {o2cb} from '../../../utils/models';

const defaultDeleteCarBrandDialogState = {
    isOpen: false,
    initialCarBrand: o2cb({}),
    carBrand: o2cb({}),
    validations: Stack()
};

export default function deleteCarBrandDialog(state = defaultDeleteCarBrandDialogState, action) {
    switch (action.type) {
        case A.OPEN_DELETE_CAR_BRAND_DIALOG:
            return {
                ...defaultDeleteCarBrandDialogState,
                initialCarBrand: action.payload.carBrand,
                carBrand: action.payload.carBrand,
                isOpen: true
            };
        case A.CLOSE_DELETE_CAR_BRAND_DIALOG:
            return defaultDeleteCarBrandDialogState;
        case A.UPDATE_ACTIVE_CAR_BRAND:
            return {
                ...state,
                carBrand: state.carBrand.set(action.payload.fieldName, action.payload.value)
            };
        case API.events.deleteCarBrand.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case auth.LOGOUT_SUCCESS:
            return defaultDeleteCarBrandDialogState;
        default:
            return state;
    }
}