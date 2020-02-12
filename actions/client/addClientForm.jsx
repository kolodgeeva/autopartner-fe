export const OPEN_ADD_CLIENT_FORM = 'OPEN_ADD_CLIENT_FORM';
export const CLOSE_ADD_CLIENT_FORM = 'CLOSE_ADD_CLIENT_FORM';
export const UPDATE_ADD_CLIENT = 'UPDATE_ADD_CLIENT';
export const VALIDATIONS_ADD_CLIENT = 'VALIDATIONS_ADD_CLIENT';

export function open() {
    return {type: OPEN_ADD_CLIENT_FORM};
}

export function close() {
    return {type: CLOSE_ADD_CLIENT_FORM};
}

export function update(fieldName, value) {
    return {type: UPDATE_ADD_CLIENT, payload: {fieldName: fieldName, value: value}};
}

export function validate(fieldNames) {
    return {type: VALIDATIONS_ADD_CLIENT, payload: {fieldNames: fieldNames}};
}

