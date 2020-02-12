import * as A from '../../../actions/car/model/addCarModelForm';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {o2cm} from '../../../utils/models';
import {Stack} from 'immutable';

const defaultAddCarModelFormState = {
    isOpen: false,
    carModel: o2cm({}),
    validations: Stack(),
    carBrandsData: []
};

export default function addCarModelForm(state = defaultAddCarModelFormState, action) {
    switch (action.type) {
        case A.OPEN_ADD_CAR_MODEL_FORM:
            return {
                ...state,
                isOpen: true
            };
        case A.CLOSE_ADD_CAR_MODEL_FORM:
            return defaultAddCarModelFormState;
        case A.UPDATE_ADD_CAR_MODEL:
            return {
                ...state,
                carModel: state.carModel.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_ADD_CAR_MODEL:
            const c = action.payload.fieldNames;
            const cb = state.carModel;
            const v = c && c.length > 0 ? state.validations.filter((v) => {
                return c.indexOf(v.fieldName) === -1
            }).concat(cb.validate(action.payload.fieldNames)) : cb.validate(action.payload.fieldNames);

            return {
                ...state,
                carModel: cb,
                validations: v
            };
        case API.events.addCarModel.actionSuccess:
            // TODO validation from server
            return defaultAddCarModelFormState;
        case API.events.addFormCarBrands.actionSuccess:
            return {
                ...state,
                carBrandsData: action.data
            };
        case auth.LOGOUT_SUCCESS:
            return defaultAddCarModelFormState;
        default:
            return state;
    }
}