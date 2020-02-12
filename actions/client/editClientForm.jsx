export const OPEN_EDIT_CLIENT_FORM = 'OPEN_EDIT_CLIENT_FORM';
export const CLOSE_EDIT_CLIENT_FORM = 'CLOSE_EDIT_CLIENT_FORM';
export const RESET_EDIT_CLIENT_FORM = 'RESET_EDIT_CLIENT_FORM';
export const UPDATE_EDIT_CLIENT = 'UPDATE_EDIT_CLIENT';
export const VALIDATIONS_EDIT_CLIENT = 'VALIDATIONS_EDIT_CLIENT';

export function open(client) {
    return {type: OPEN_EDIT_CLIENT_FORM, payload: {client: client}};
}

export function close() {
    return {type: CLOSE_EDIT_CLIENT_FORM};
}

export function reset() {
    return {type: RESET_EDIT_CLIENT_FORM};
}

export function update(fieldName, value) {
    return {type: UPDATE_EDIT_CLIENT, payload: {fieldName: fieldName, value: value}};
}

export function validate(fieldNames) {
    return {type: VALIDATIONS_EDIT_CLIENT, payload: {fieldNames: fieldNames}};
}
