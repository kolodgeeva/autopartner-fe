import { combineReducers } from 'redux';
import addCarBrandForm from './addCarBrandForm';
import editCarBrandForm from './editCarBrandForm';
import deleteCarBrandDialog from './deleteCarBrandDialog';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';

const defaultCarBrandsTableState = {
    tableHeight: 0,
    carBrands: []
};

function carBrandsTable(state = defaultCarBrandsTableState, action) {
    switch (action.type) {
        case auth.LOGOUT_SUCCESS:
            return {
                ...state,
                carBrands: []
            };
        case API.events.carBrands.actionSuccess:
            return {
                ...state,
                carBrands: action.data
            };
        default:
            return state;
    }
}

const carBrand = combineReducers({
    addCarBrandForm,
    editCarBrandForm,
    carBrandsTable,
    deleteCarBrandDialog
});

export default carBrand;