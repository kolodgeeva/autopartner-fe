import { combineReducers } from 'redux';
import addCarForm from './addCarForm';
import editCarForm from './editCarForm';
import deleteCarDialog from './deleteCarDialog';
import {API} from "../../rest/restAPI";
import * as auth from '../../actions/auth';

const defaultCarsTableState = {
    tableHeight: 0,
    cars: []
};

function carsTable(state = defaultCarsTableState, action) {
    switch (action.type) {
        case auth.LOGOUT_SUCCESS:
            return {
                ...state,
                cars: []
            };
        case API.events.cars.actionSuccess:
            return {
                ...state,
                cars: action.data
            };
        default:
            return state;
    }
}

const car = combineReducers({
    addCarForm,
    editCarForm,
    carsTable,
    deleteCarDialog
});

export default car;