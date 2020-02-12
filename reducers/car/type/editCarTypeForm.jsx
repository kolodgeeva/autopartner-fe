import * as A from '../../../actions/car/type/editCarTypeForm';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {Stack} from 'immutable';
import {o2ct} from '../../../utils/models';

const defaultEditCarTypeFormState = {
    isOpen: false,
    initialCarType: o2ct({}),
    carType: o2ct({}),
    validations: Stack()
};

export default function editCarTypeForm(state = defaultEditCarTypeFormState, action) {
    switch (action.type) {
        case A.OPEN_EDIT_CAR_TYPE_FORM:
            return {
                ...defaultEditCarTypeFormState,
                initialCarType: action.payload.carType,
                carType: action.payload.carType,
                isOpen: true
            };
        case A.CLOSE_EDIT_CAR_TYPE_FORM:
            return defaultEditCarTypeFormState;
        case A.RESET_EDIT_CAR_TYPE_FORM:
            return {
                ...defaultEditCarTypeFormState,
                initialCarType: state.initialCarType,
                carType: state.initialCarType,
                isOpen: true
            };
        case A.UPDATE_EDIT_CAR_TYPE:
            return {
                ...state,
                carType: state.carType.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_EDIT_CAR_TYPE:
            const c = action.payload.fieldNames;
            const cl = state.carType;
            const v = c && c.length > 0 ? state.validations.filter((v) => {
                return c.indexOf(v.fieldName) === -1
            }).concat(cl.validate(action.payload.fieldNames)) : cl.validate(action.payload.fieldNames);

            return {
                ...state,
                carType: cl,
                validations: v
            };
        case API.events.editCarType.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case auth.LOGOUT_SUCCESS:
            return defaultEditCarTypeFormState;
        default:
            return state;
    }
}