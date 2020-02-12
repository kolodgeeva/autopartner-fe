import * as A from '../../../actions/order/material/editMaterialTypeForm';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {Stack} from 'immutable';
import {o2tt} from '../../../utils/models';

const defaultEditMaterialTypeFormState = {
    isOpen: false,
    initialMaterialType: o2tt({}),
    materialType: o2tt({}),
    validations: Stack()
};

export default function editMaterialTypeForm(state = defaultEditMaterialTypeFormState, action) {
    switch (action.type) {
        case A.OPEN_EDIT_MATERIAL_TYPE_FORM:
            return {
                ...defaultEditMaterialTypeFormState,
                initialMaterialType: action.payload.materialType,
                materialType: action.payload.materialType,
                isOpen: true
            };
        case A.CLOSE_EDIT_MATERIAL_TYPE_FORM:
            return defaultEditMaterialTypeFormState;
        case A.RESET_EDIT_MATERIAL_TYPE_FORM:
            return {
                ...defaultEditMaterialTypeFormState,
                initialMaterialType: state.initialMaterialType,
                materialType: state.initialMaterialType,
                isOpen: true
            };
        case A.UPDATE_EDIT_MATERIAL_TYPE:
            return {
                ...state,
                materialType: state.materialType.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_EDIT_MATERIAL_TYPE:
            const c = action.payload.fieldNames;
            const cl = state.materialType;
            const v = c && c.length > 0 ? state.validations.filter((v) => {
                return c.indexOf(v.fieldName) === -1
            }).concat(cl.validate(action.payload.fieldNames)) : cl.validate(action.payload.fieldNames);

            return {
                ...state,
                materialType: cl,
                validations: v
            };
        case API.events.editMaterialType.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case auth.LOGOUT_SUCCESS:
            return defaultEditMaterialTypeFormState;
        default:
            return state;
    }
}