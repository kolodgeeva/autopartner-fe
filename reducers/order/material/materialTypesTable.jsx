import { combineReducers } from 'redux';
import addMaterialTypeForm from './addMaterialTypeForm';
import editMaterialTypeForm from './editMaterialTypeForm';
import deleteMaterialTypeDialog from './deleteMaterialTypeDialog';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';

const defaultMaterialTypesTableState = {
    tableHeight: 0,
    materialTypes: []
};

function materialTypesTable(state = defaultMaterialTypesTableState, action) {
    switch (action.type) {
        case auth.LOGOUT_SUCCESS:
            return {
                ...state,
                materialTypes: []
            };
        case API.events.materialTypes.actionSuccess:
            return {
                ...state,
                materialTypes: action.data
            };
        default:
            return state;
    }
}

const materialType = combineReducers({
    addMaterialTypeForm,
    editMaterialTypeForm,
    materialTypesTable,
    deleteMaterialTypeDialog
});

export default materialType;