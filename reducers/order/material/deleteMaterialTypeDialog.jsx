import * as A from '../../../actions/order/material/deleteMaterialTypeDialog';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {Stack} from 'immutable';
import {o2tt} from '../../../utils/models';

const defaultDeleteMaterialTypeDialogState = {
    isOpen: false,
    initialMaterialType: o2tt({}),
    materialType: o2tt({}),
    validations: Stack()
};

export default function deleteMaterialTypeDialog(state = defaultDeleteMaterialTypeDialogState, action) {
    switch (action.type) {
        case A.OPEN_DELETE_MATERIAL_TYPE_DIALOG:
            return {
                ...defaultDeleteMaterialTypeDialogState,
                initialMaterialType: action.payload.materialType,
                materialType: action.payload.materialType,
                isOpen: true
            };
        case A.CLOSE_DELETE_MATERIAL_TYPE_DIALOG:
            return defaultDeleteMaterialTypeDialogState;
        case A.UPDATE_ACTIVE_MATERIAL_TYPE:
            return {
                ...state,
                materialType: state.materialType.set(action.payload.fieldName, action.payload.value)
            };
        case API.events.deleteMaterialType.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case auth.LOGOUT_SUCCESS:
            return defaultDeleteMaterialTypeDialogState;
        default:
            return state;
    }
}