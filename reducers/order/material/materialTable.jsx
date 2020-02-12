import { combineReducers } from 'redux';
import addMaterialForm from './addMaterialForm';
import editMaterialForm from './editMaterialForm';
import deleteMaterialDialog from './deleteMaterialDialog';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';

const defaultMaterialsTableState = {
    tableHeight: 0,
    materials: []
};

function materialsTable(state = defaultMaterialsTableState, action) {
    switch (action.type) {
        case auth.LOGOUT_SUCCESS:
            return {
                ...state,
                materials: []
            };
        case API.events.materials.actionSuccess:
            return {
                ...state,
                materials: action.data
            };
        default:
            return state;
    }
}

const material = combineReducers({
    addMaterialForm,
    editMaterialForm,
    materialsTable,
    deleteMaterialDialog
});

export default material;