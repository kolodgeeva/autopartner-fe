import * as A from '../../actions/order/editOrderForm';
import {API} from "../../rest/restAPI";
import * as auth from '../../actions/auth';
import {Stack} from 'immutable';
import {o2order} from '../../utils/models';

const defaultEditOrderFormState = {
    isOpen: false,
    initialOrder: o2order({}),
    order: o2order({}),
    validations: Stack(),
    orderModelsData: [],
    carsData: []
};

export default function editOrderModelForm(state = defaultEditOrderFormState, action) {
    switch (action.type) {
        case A.OPEN_EDIT_ORDER_FORM:
            return {
                ...defaultEditOrderFormState,
                initialOrder: action.payload.order,
                order: action.payload.order,
                isOpen: true
            };
        case A.CLOSE_EDIT_ORDER_FORM:
            return defaultEditOrderFormState;
        case A.RESET_EDIT_ORDER_FORM:
            return {
                ...defaultEditOrderFormState,
                initialOrder: state.initialOrder,
                order: state.initialOrder,
                isOpen: true
            };
        case A.UPDATE_EDIT_ORDER:
            return {
                ...state,
                order: state.order.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_EDIT_ORDER:
            const c = action.payload.fieldNames;
            const order = state.order;
            const v = c && c.length > 0 ? state.validations.filter((v) => {
                return c.indexOf(v.fieldName) === -1
            }).concat(order.validate(action.payload.fieldNames)) : order.validate(action.payload.fieldNames);

            return {
                ...state,
                order: order,
                validations: v
            };
        case API.events.editOrder.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case API.events.editFormOrderCars.actionSuccess:
            return {
                ...state,
                carsData: action.data
            };
        case auth.LOGOUT_SUCCESS:
            return defaultEditOrderFormState;
        default:
            return state;
    }
}