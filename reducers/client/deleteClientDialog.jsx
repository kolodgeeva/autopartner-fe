import * as A from '../../actions/client/deleteClientDialog';
import {API} from "../../rest/restAPI";
import * as auth from '../../actions/auth';
import {Stack} from 'immutable';
import {o2c} from '../../utils/models';

const defaultDeleteClientDialogState = {
    isOpen: false,
    initialClient: o2c({}),
    client: o2c({}),
    validations: Stack()
};

export default function deleteClientDialog(state = defaultDeleteClientDialogState, action) {
    switch (action.type) {
        case A.OPEN_DELETE_CLIENT_DIALOG:
            return {
                ...defaultDeleteClientDialogState,
                initialClient: action.payload.client,
                client: action.payload.client,
                isOpen: true
            };
        case A.CLOSE_DELETE_CLIENT_DIALOG:
            return defaultDeleteClientDialogState;
        case A.UPDATE_ACTIVE_CLIENT:
            return {
                ...state,
                client: state.client.set(action.payload.fieldName, action.payload.value)
            };
        case API.events.deleteClient.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case auth.LOGOUT_SUCCESS:
            return defaultDeleteClientDialogState;
        default:
            return state;
    }
}