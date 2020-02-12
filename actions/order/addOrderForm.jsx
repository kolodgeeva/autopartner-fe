export const OPEN_ADD_ORDER_FORM = 'OPEN_ADD_ORDER_FORM';
export const CLOSE_ADD_ORDER_FORM = 'CLOSE_ADD_ORDER_FORM';
export const UPDATE_ADD_ORDER = 'UPDATE_ADD_ORDER';
export const VALIDATIONS_ADD_ORDER = 'VALIDATIONS_ADD_ORDER';

export function open() {
    return {type: OPEN_ADD_ORDER_FORM};
}

export function close() {
    return {type: CLOSE_ADD_ORDER_FORM};
}

export function update(fieldName, value) {
    return {type: UPDATE_ADD_ORDER, payload: {fieldName: fieldName, value: value}};
}

export function validate(fieldNames) {
    return {type: VALIDATIONS_ADD_ORDER, payload: {fieldNames: fieldNames}};
}

