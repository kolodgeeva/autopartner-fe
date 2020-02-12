import * as A from '../../../actions/car/type/deleteCarTypeDialog';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {Stack} from 'immutable';
import {o2ct} from '../../../utils/models';

const defaultDeleteCarTypeDialogState = {
    isOpen: false,
    initialCarType: o2ct({}),
    carType: o2ct({}),
    validations: Stack()
};

export default function deleteCarTypeDialog(state = defaultDeleteCarTypeDialogState, action) {
    switch (action.type) {
        case A.OPEN_DELETE_CAR_TYPE_DIALOG:
            return {
                ...defaultDeleteCarTypeDialogState,
                initialCarType: action.payload.carType,
                carType: action.payload.carType,
                isOpen: true
            };
        case A.CLOSE_DELETE_CAR_TYPE_DIALOG:
            return defaultDeleteCarTypeDialogState;
        case A.UPDATE_ACTIVE_CAR_TYPE:
            return {
                ...state,
                carType: state.carType.set(action.payload.fieldName, action.payload.value)
            };
        case API.events.deleteCarType.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case auth.LOGOUT_SUCCESS:
            return defaultDeleteCarTypeDialogState;
        default:
            return state;
    }
}