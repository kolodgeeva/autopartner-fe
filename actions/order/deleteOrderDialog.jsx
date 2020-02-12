export const OPEN_DELETE_ORDER_DIALOG = 'OPEN_DELETE_ORDER_DIALOG';
export const CLOSE_DELETE_ORDER_DIALOG = 'CLOSE_DELETE_ORDER_DIALOG';
export const UPDATE_ACTIVE_ORDER = 'UPDATE_ACTIVE_ORDER';

export function open(order) {
    return {type: OPEN_DELETE_ORDER_DIALOG, payload: {order: order}};
}

export function close() {
    return {type: CLOSE_DELETE_ORDER_DIALOG};
}

export function update(fieldName, value) {
    return {type: UPDATE_ACTIVE_ORDER, payload: {fieldName: fieldName, value: value}};
}