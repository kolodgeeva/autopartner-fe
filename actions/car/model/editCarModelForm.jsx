export const OPEN_EDIT_CAR_MODEL_FORM = 'OPEN_EDIT_CAR_MODEL_FORM';
export const CLOSE_EDIT_CAR_MODEL_FORM = 'CLOSE_EDIT_CAR_MODEL_FORM';
export const RESET_EDIT_CAR_MODEL_FORM = 'RESET_EDIT_CAR_MODEL_FORM';
export const UPDATE_EDIT_CAR_MODEL = 'UPDATE_EDIT_CAR_MODEL';
export const VALIDATIONS_EDIT_CAR_MODEL = 'VALIDATIONS_EDIT_CAR_MODEL';

export function open(carModel) {
    return {type: OPEN_EDIT_CAR_MODEL_FORM, payload: {carModel: carModel}};
}

export function close() {
    return {type: CLOSE_EDIT_CAR_MODEL_FORM};
}

export function reset() {
    return {type: RESET_EDIT_CAR_MODEL_FORM};
}

export function update(fieldName, value) {
    return {type: UPDATE_EDIT_CAR_MODEL, payload: {fieldName: fieldName, value: value}};
}

export function validate(fieldNames) {
    return {type: VALIDATIONS_EDIT_CAR_MODEL, payload: {fieldNames: fieldNames}};
}
