import { combineReducers } from 'redux';
import addCarModelForm from './addCarModelForm';
import editCarModelForm from './editCarModelForm';
import deleteCarModelDialog from './deleteCarModelDialog';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';

const defaultCarModelsTableState = {
    tableHeight: 0,
    carModels: []
};

function carModelsTable(state = defaultCarModelsTableState, action) {
    switch (action.type) {
        case auth.LOGOUT_SUCCESS:
            return {
                ...state,
                carModels: []
            };
        case API.events.carModels.actionSuccess:
            return {
                ...state,
                carModels: action.data
            };
        default:
            return state;
    }
}

const carModel = combineReducers({
    addCarModelForm,
    editCarModelForm,
    carModelsTable,
    deleteCarModelDialog
});

export default carModel;