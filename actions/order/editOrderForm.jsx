export const OPEN_EDIT_ORDER_FORM = 'OPEN_EDIT_ORDER_FORM';
export const CLOSE_EDIT_ORDER_FORM = 'CLOSE_EDIT_ORDER_FORM';
export const RESET_EDIT_ORDER_FORM = 'RESET_EDIT_ORDER_FORM';
export const UPDATE_EDIT_ORDER = 'UPDATE_EDIT_ORDER';
export const VALIDATIONS_EDIT_ORDER = 'VALIDATIONS_EDIT_ORDER';

export function open(order) {
    return {type: OPEN_EDIT_ORDER_FORM, payload: {order: order}};
}

export function close() {
    return {type: CLOSE_EDIT_ORDER_FORM};
}

export function reset() {
    return {type: RESET_EDIT_ORDER_FORM};
}

export function update(fieldName, value) {
    return {type: UPDATE_EDIT_ORDER, payload: {fieldName: fieldName, value: value}};
}

export function validate(fieldNames) {
    return {type: VALIDATIONS_EDIT_ORDER, payload: {fieldNames: fieldNames}};
}
