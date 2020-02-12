import * as A from '../../../actions/order/material/deleteMaterialDialog';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {Stack} from 'immutable';
import {o2material} from '../../../utils/models';

const defaultDeleteMaterialDialogState = {
    isOpen: false,
    initialMaterial: o2material({}),
    material: o2material({}),
    validations: Stack()
};

export default function deleteMaterialDialog(state = defaultDeleteMaterialDialogState, action) {
    switch (action.type) {
        case A.OPEN_DELETE_MATERIAL_DIALOG:
            return {
                ...defaultDeleteMaterialDialogState,
                initialMaterial: action.payload.material,
                material: action.payload.material,
                isOpen: true
            };
        case A.CLOSE_DELETE_MATERIAL_DIALOG:
            return defaultDeleteMaterialDialogState;
        case A.UPDATE_ACTIVE_MATERIAL:
            return {
                ...state,
                material: state.material.set(action.payload.fieldName, action.payload.value)
            };
        case API.events.deleteMaterial.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case auth.LOGOUT_SUCCESS:
            return defaultDeleteMaterialDialogState;
        default:
            return state;
    }
}