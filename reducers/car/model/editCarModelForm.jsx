import * as A from '../../../actions/car/model/editCarModelForm';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {Stack} from 'immutable';
import {o2cm} from '../../../utils/models';

const defaultEditCarModelFormState = {
    isOpen: false,
    initialCarModel: o2cm({}),
    carModel: o2cm({}),
    validations: Stack(),
    carBrandsData: []
};

export default function editCarModelForm(state = defaultEditCarModelFormState, action) {
    switch (action.type) {
        case A.OPEN_EDIT_CAR_MODEL_FORM:
            return {
                ...defaultEditCarModelFormState,
                initialCarModel: action.payload.carModel,
                carModel: action.payload.carModel,
                isOpen: true
            };
        case A.CLOSE_EDIT_CAR_MODEL_FORM:
            return defaultEditCarModelFormState;
        case A.RESET_EDIT_CAR_MODEL_FORM:
            return {
                ...defaultEditCarModelFormState,
                initialCarModel: state.initialCarModel,
                carModel: state.initialCarModel,
                isOpen: true
            };
        case A.UPDATE_EDIT_CAR_MODEL:
            return {
                ...state,
                carModel: state.carModel.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_EDIT_CAR_MODEL:
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
        case API.events.editCarModel.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case API.events.editFormCarBrands.actionSuccess:
            return {
                ...state,
                carBrandsData: action.data
            };
        case auth.LOGOUT_SUCCESS:
            return defaultEditCarModelFormState;
        default:
            return state;
    }
}