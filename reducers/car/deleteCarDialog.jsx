import * as A from '../../actions/car/deleteCarDialog';
import {API} from "../../rest/restAPI";
import * as auth from '../../actions/auth';
import {Stack} from 'immutable';
import {o2car} from '../../utils/models';

const defaultDeleteCarDialogState = {
    isOpen: false,
    initialCar: o2car({}),
    car: o2car({}),
    validations: Stack()
};

export default function deleteCarModelDialog(state = defaultDeleteCarDialogState, action) {
    switch (action.type) {
        case A.OPEN_DELETE_CAR_DIALOG:
            return {
                ...defaultDeleteCarDialogState,
                initialCar: action.payload.car,
                car: action.payload.car,
                isOpen: true
            };
        case A.CLOSE_DELETE_CAR_DIALOG:
            return defaultDeleteCarDialogState;
        case A.UPDATE_ACTIVE_CAR:
            return {
                ...state,
                car: state.car.set(action.payload.fieldName, action.payload.value)
            };
        case API.events.deleteCar.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case auth.LOGOUT_SUCCESS:
            return defaultDeleteCarDialogState;
        default:
            return state;
    }
}