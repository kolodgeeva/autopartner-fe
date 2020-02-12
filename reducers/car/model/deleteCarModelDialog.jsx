import * as A from '../../../actions/car/model/deleteCarModelDialog';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {Stack} from 'immutable';
import {o2cm} from '../../../utils/models';

const defaultDeleteCarModelDialogState = {
    isOpen: false,
    initialCarModel: o2cm({}),
    carModel: o2cm({}),
    validations: Stack()
};

export default function deleteCarModelDialog(state = defaultDeleteCarModelDialogState, action) {
    switch (action.type) {
        case A.OPEN_DELETE_CAR_MODEL_DIALOG:
            return {
                ...defaultDeleteCarModelDialogState,
                initialCarModel: action.payload.carModel,
                carModel: action.payload.carModel,
                isOpen: true
            };
        case A.CLOSE_DELETE_CAR_MODEL_DIALOG:
            return defaultDeleteCarModelDialogState;
        case A.UPDATE_ACTIVE_CAR_MODEL:
            return {
                ...state,
                carModel: state.carModel.set(action.payload.fieldName, action.payload.value)
            };
        case API.events.deleteCarModel.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case auth.LOGOUT_SUCCESS:
            return defaultDeleteCarModelDialogState;
        default:
            return state;
    }
}