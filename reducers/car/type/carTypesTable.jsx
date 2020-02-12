import { combineReducers } from 'redux';
import addCarTypeForm from './addCarTypeForm';
import editCarTypeForm from './editCarTypeForm';
import deleteCarTypeDialog from './deleteCarTypeDialog';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';

const defaultCarTypesTableState = {
    tableHeight: 0,
    carTypes: []
};

function carTypesTable(state = defaultCarTypesTableState, action) {
    switch (action.type) {
        case auth.LOGOUT_SUCCESS:
            return {
                ...state,
                carTypes: []
            };
        case API.events.carTypes.actionSuccess:
            return {
                ...state,
                carTypes: action.data
            };
        default:
            return state;
    }
}

const carType = combineReducers({
    addCarTypeForm,
    editCarTypeForm,
    carTypesTable,
    deleteCarTypeDialog
});

export default carType;