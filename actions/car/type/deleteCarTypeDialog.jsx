export const OPEN_DELETE_CAR_TYPE_DIALOG = 'OPEN_DELETE_CAR_TYPE_DIALOG';
export const CLOSE_DELETE_CAR_TYPE_DIALOG = 'CLOSE_DELETE_CAR_TYPE_DIALOG';
export const UPDATE_ACTIVE_CAR_TYPE = 'UPDATE_ACTIVE_CAR_TYPE';

export function open(carType) {
    return {type: OPEN_DELETE_CAR_TYPE_DIALOG, payload: {carType: carType}};
}

export function close() {
    return {type: CLOSE_DELETE_CAR_TYPE_DIALOG};
}

export function update(fieldName, value) {
    return {type: UPDATE_ACTIVE_CAR_TYPE, payload: {fieldName: fieldName, value: value}};
}