export const OPEN_DELETE_CAR_DIALOG = 'OPEN_DELETE_CAR_DIALOG';
export const CLOSE_DELETE_CAR_DIALOG = 'CLOSE_DELETE_CAR_DIALOG';
export const UPDATE_ACTIVE_CAR = 'UPDATE_ACTIVE_CAR';

export function open(car) {
    return {type: OPEN_DELETE_CAR_DIALOG, payload: {car: car}};
}

export function close() {
    return {type: CLOSE_DELETE_CAR_DIALOG};
}

export function update(fieldName, value) {
    return {type: UPDATE_ACTIVE_CAR, payload: {fieldName: fieldName, value: value}};
}