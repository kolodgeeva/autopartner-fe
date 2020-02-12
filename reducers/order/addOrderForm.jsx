import * as A from '../../actions/order/addOrderForm';
import {API} from "../../rest/restAPI";
import * as auth from '../../actions/auth';
import {o2order} from '../../utils/models';
import {Stack} from 'immutable';

const defaultAddOrderFormState = {
    isOpen: false,
    order: o2order({}),
    validations: Stack(),
    orderModelsData: [],
    carsData: []
};

export default function addOrderForm(state = defaultAddOrderFormState, action) {
    switch (action.type) {
        case A.OPEN_ADD_ORDER_FORM:
            return {
                ...state,
                isOpen: true
            };
        case A.CLOSE_ADD_ORDER_FORM:
            return defaultAddOrderFormState;
        case A.UPDATE_ADD_ORDER:
            return {
                ...state,
                order: state.order.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_ADD_ORDER:
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
        case API.events.addOrder.actionSuccess:
            // TODO validation from server
            return defaultAddOrderFormState;
        case API.events.addFormOrderCars.actionSuccess:
            return {
                ...state,
                carsData: action.data
            };
        case auth.LOGOUT_SUCCESS:
            return defaultAddOrderFormState;
        default:
            return state;
    }
}