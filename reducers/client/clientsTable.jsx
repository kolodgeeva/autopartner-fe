import { combineReducers } from 'redux';
import addClientForm from './addClientForm';
import editClientForm from './editClientForm';
import deleteClientDialog from './deleteClientDialog';
import {API} from "../../rest/restAPI";
import * as auth from '../../actions/auth';

const defaultClientsTableState = {
    tableHeight: 0,
    clients: []
};

function clientsTable(state = defaultClientsTableState, action) {
    switch (action.type) {
        case auth.LOGOUT_SUCCESS:
            return {
                ...state,
                clients: []
            };
        case API.events.clients.actionSuccess:
            return {
                ...state,
                clients: action.data
            };
        default:
            return state;
    }
}

const client = combineReducers({
    addClientForm,
    editClientForm,
    clientsTable,
    deleteClientDialog
});

export default client;