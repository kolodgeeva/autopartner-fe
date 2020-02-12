import * as A from '../../../actions/order/material/editMaterialForm';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {Stack} from 'immutable';
import {o2material} from '../../../utils/models';

const defaultEditMaterialFormState = {
    isOpen: false,
    initialMaterial: o2material({}),
    material: o2material({}),
    validations: Stack(),
    materialTypesData: []
};

export default function editMaterialForm(state = defaultEditMaterialFormState, action) {
    switch (action.type) {
        case A.OPEN_EDIT_MATERIAL_FORM:
            return {
                ...defaultEditMaterialFormState,
                initialMaterial: action.payload.material,
                material: action.payload.material,
                isOpen: true
            };
        case A.CLOSE_EDIT_MATERIAL_FORM:
            return defaultEditMaterialFormState;
        case A.RESET_EDIT_MATERIAL_FORM:
            return {
                ...defaultEditMaterialFormState,
                initialMaterial: state.initialMaterial,
                material: state.initialMaterial,
                isOpen: true
            };
        case A.UPDATE_EDIT_MATERIAL:
            return {
                ...state,
                material: state.material.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_EDIT_MATERIAL:
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
        case API.events.editMaterial.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case API.events.editFormMaterialTypes.actionSuccess:
            return {
                ...state,
                materialTypesData: action.data
            };
        case auth.LOGOUT_SUCCESS:
            return defaultEditMaterialFormState;
        default:
            return state;
    }
}