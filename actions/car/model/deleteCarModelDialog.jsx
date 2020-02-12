export const OPEN_DELETE_CAR_MODEL_DIALOG = 'OPEN_DELETE_CAR_MODEL_DIALOG';
export const CLOSE_DELETE_CAR_MODEL_DIALOG = 'CLOSE_DELETE_CAR_MODEL_DIALOG';
export const UPDATE_ACTIVE_CAR_MODEL = 'UPDATE_ACTIVE_CAR_MODEL';

export function open(carModel) {
    return {type: OPEN_DELETE_CAR_MODEL_DIALOG, payload: {carModel: carModel}};
}

export function close() {
    return {type: CLOSE_DELETE_CAR_MODEL_DIALOG};
}

export function update(fieldName, value) {
    return {type: UPDATE_ACTIVE_CAR_MODEL, payload: {fieldName: fieldName, value: value}};
}