import * as A from '../../../actions/order/material/addMaterialTypeForm';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {o2tt} from '../../../utils/models';
import {Stack} from 'immutable';

const defaultAddMaterialTypeFormState = {
    isOpen: false,
    materialType: o2tt({}),
    validations: Stack()
};

export default function addMaterialTypeForm(state = defaultAddMaterialTypeFormState, action) {
    switch (action.type) {
        case A.OPEN_ADD_MATERIAL_TYPE_FORM:
            return {
                ...state,
                isOpen: true
            };
        case A.CLOSE_ADD_MATERIAL_TYPE_FORM:
            return defaultAddMaterialTypeFormState;
        case A.UPDATE_ADD_MATERIAL_TYPE:
            return {
                ...state,
                materialType: state.materialType.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_ADD_MATERIAL_TYPE:
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
        case API.events.addMaterialType.actionSuccess:
            // TODO validation from server
            return defaultAddMaterialTypeFormState;
        case auth.LOGOUT_SUCCESS:
            return defaultAddMaterialTypeFormState;
        default:
            return state;
    }
}