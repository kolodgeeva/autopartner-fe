import * as A from '../../actions/order/deleteOrderDialog';
import {API} from "../../rest/restAPI";
import * as auth from '../../actions/auth';
import {Stack} from 'immutable';
import {o2order} from '../../utils/models';

const defaultDeleteOrderDialogState = {
    isOpen: false,
    initialOrder: o2order({}),
    order: o2order({}),
    validations: Stack()
};

export default function deleteOrderModelDialog(state = defaultDeleteOrderDialogState, action) {
    switch (action.type) {
        case A.OPEN_DELETE_ORDER_DIALOG:
            return {
                ...defaultDeleteOrderDialogState,
                initialOrder: action.payload.order,
                order: action.payload.order,
                isOpen: true
            };
        case A.CLOSE_DELETE_ORDER_DIALOG:
            return defaultDeleteOrderDialogState;
        case A.UPDATE_ACTIVE_ORDER:
            return {
                ...state,
                order: state.order.set(action.payload.fieldName, action.payload.value)
            };
        case API.events.deleteOrder.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case auth.LOGOUT_SUCCESS:
            return defaultDeleteOrderDialogState;
        default:
            return state;
    }
}