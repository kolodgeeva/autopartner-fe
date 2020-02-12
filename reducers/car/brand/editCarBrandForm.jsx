import * as A from '../../../actions/car/brand/editCarBrandForm';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {Stack} from 'immutable';
import {o2cb} from '../../../utils/models';

const defaultEditCarBrandFormState = {
    isOpen: false,
    initialCarBrand: o2cb({}),
    carBrand: o2cb({}),
    validations: Stack(),
    carTypesData: []
};

export default function editCarBrandForm(state = defaultEditCarBrandFormState, action) {
    switch (action.type) {
        case A.OPEN_EDIT_CAR_BRAND_FORM:
            return {
                ...defaultEditCarBrandFormState,
                initialCarBrand: action.payload.carBrand,
                carBrand: action.payload.carBrand,
                isOpen: true
            };
        case A.CLOSE_EDIT_CAR_BRAND_FORM:
            return defaultEditCarBrandFormState;
        case A.RESET_EDIT_CAR_BRAND_FORM:
            return {
                ...defaultEditCarBrandFormState,
                initialCarBrand: state.initialCarBrand,
                carBrand: state.initialCarBrand,
                isOpen: true
            };
        case A.UPDATE_EDIT_CAR_BRAND:
            return {
                ...state,
                carBrand: state.carBrand.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_EDIT_CAR_BRAND:
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
        case API.events.editCarBrand.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case API.events.editFormCarTypes.actionSuccess:
            return {
                ...state,
                carTypesData: action.data
            };
        case auth.LOGOUT_SUCCESS:
            return defaultEditCarBrandFormState;
        default:
            return state;
    }
}