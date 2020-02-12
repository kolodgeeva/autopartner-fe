import * as A from '../../../actions/car/type/addCarTypeForm';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {o2ct} from '../../../utils/models';
import {Stack} from 'immutable';

const defaultAddCarTypeFormState = {
    isOpen: false,
    carType: o2ct({}),
    validations: Stack()
};

export default function addCarTypeForm(state = defaultAddCarTypeFormState, action) {
    switch (action.type) {
        case A.OPEN_ADD_CAR_TYPE_FORM:
            return {
                ...state,
                isOpen: true
            };
        case A.CLOSE_ADD_CAR_TYPE_FORM:
            return defaultAddCarTypeFormState;
        case A.UPDATE_ADD_CAR_TYPE:
            return {
                ...state,
                carType: state.carType.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_ADD_CAR_TYPE:
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
        case API.events.addCarType.actionSuccess:
            // TODO validation from server
            return defaultAddCarTypeFormState;
        case auth.LOGOUT_SUCCESS:
            return defaultAddCarTypeFormState;
        default:
            return state;
    }
}