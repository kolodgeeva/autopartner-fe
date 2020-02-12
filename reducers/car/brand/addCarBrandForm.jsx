import * as A from '../../../actions/car/brand/addCarBrandForm';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {o2cb} from '../../../utils/models';
import {Stack} from 'immutable';

const defaultAddCarBrandFormState = {
    isOpen: false,
    carBrand: o2cb({}),
    validations: Stack(),
    carTypesData: []
};

export default function addCarBrandForm(state = defaultAddCarBrandFormState, action) {
    switch (action.type) {
        case A.OPEN_ADD_CAR_BRAND_FORM:
            return {
                ...state,
                isOpen: true
            };
        case A.CLOSE_ADD_CAR_BRAND_FORM:
            return defaultAddCarBrandFormState;
        case A.UPDATE_ADD_CAR_BRAND:
            return {
                ...state,
                carBrand: state.carBrand.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_ADD_CAR_BRAND:
            const c = action.payload.fieldNames;
            const cb = state.carBrand;
            const v = c && c.length > 0 ? state.validations.filter((v) => {
                return c.indexOf(v.fieldName) === -1
            }).concat(cb.validate(action.payload.fieldNames)) : cb.validate(action.payload.fieldNames);

            return {
                ...state,
                carBrand: cb,
                validations: v
            };
        case API.events.addCarBrand.actionSuccess:
            // TODO validation from server
            return defaultAddCarBrandFormState;
        case API.events.addFormCarTypes.actionSuccess:
            return {
                ...state,
                carTypesData: action.data
            };
        case auth.LOGOUT_SUCCESS:
            return defaultAddCarBrandFormState;
        default:
            return state;
    }
}