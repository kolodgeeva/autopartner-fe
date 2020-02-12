import * as A from '../../../actions/order/material/addMaterialForm';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {o2material} from '../../../utils/models';
import {Stack} from 'immutable';

const defaultAddMaterialFormState = {
    isOpen: false,
    material: o2material({}),
    validations: Stack(),
    materialTypesData: []
};

export default function addMaterialForm(state = defaultAddMaterialFormState, action) {
    switch (action.type) {
        case A.OPEN_ADD_MATERIAL_FORM:
            return {
                ...state,
                isOpen: true
            };
        case A.CLOSE_ADD_MATERIAL_FORM:
            return defaultAddMaterialFormState;
        case A.UPDATE_ADD_MATERIAL:
            return {
                ...state,
                material: state.material.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_ADD_MATERIAL:
            const c = action.payload.fieldNames;
            const cb = state.material;
            const v = c && c.length > 0 ? state.validations.filter((v) => {
                return c.indexOf(v.fieldName) === -1
            }).concat(cb.validate(action.payload.fieldNames)) : cb.validate(action.payload.fieldNames);

            return {
                ...state,
                material: cb,
                validations: v
            };
        case API.events.addMaterial.actionSuccess:
            // TODO validation from server
            return defaultAddMaterialFormState;
        case API.events.addFormMaterialTypes.actionSuccess:
            return {
                ...state,
                materialTypesData: action.data
            };
        case auth.LOGOUT_SUCCESS:
            return defaultAddMaterialFormState;
        default:
            return state;
    }
}