export const OPEN_DELETE_CLIENT_DIALOG = 'OPEN_DELETE_CLIENT_DIALOG';
export const CLOSE_DELETE_CLIENT_DIALOG = 'CLOSE_DELETE_CLIENT_DIALOG';
export const UPDATE_ACTIVE_CLIENT = 'UPDATE_ACTIVE_CLIENT';

export function open(client) {
    return {type: OPEN_DELETE_CLIENT_DIALOG, payload: {client: client}};
}

export function close() {
    return {type: CLOSE_DELETE_CLIENT_DIALOG};
}

export function update(fieldName, value) {
    return {type: UPDATE_ACTIVE_CLIENT, payload: {fieldName: fieldName, value: value}};
}