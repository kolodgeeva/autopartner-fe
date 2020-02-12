import { combineReducers } from 'redux';
import addOrderForm from './addOrderForm';
import editOrderForm from './editOrderForm';
import deleteOrderDialog from './deleteOrderDialog';
import {API} from "../../rest/restAPI";
import * as auth from '../../actions/auth';

const defaultOrdersTableState = {
    tableHeight: 0,
    orders: []
};

function ordersTable(state = defaultOrdersTableState, action) {
    switch (action.type) {
        case auth.LOGOUT_SUCCESS:
            return {
                ...state,
                orders: []
            };
        case API.events.orders.actionSuccess:
            return {
                ...state,
                orders: action.data
            };
        default:
            return state;
    }
}

const order = combineReducers({
    addOrderForm,
    editOrderForm,
    ordersTable,
    deleteOrderDialog
});

export default order;