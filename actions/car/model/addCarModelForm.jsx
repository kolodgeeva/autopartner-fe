export const OPEN_ADD_CAR_MODEL_FORM = 'OPEN_ADD_CAR_MODEL_FORM';
export const CLOSE_ADD_CAR_MODEL_FORM = 'CLOSE_ADD_CAR_MODEL_FORM';
export const UPDATE_ADD_CAR_MODEL = 'UPDATE_ADD_CAR_MODEL';
export const VALIDATIONS_ADD_CAR_MODEL = 'VALIDATIONS_ADD_CAR_MODEL';

export function open() {
    return {type: OPEN_ADD_CAR_MODEL_FORM};
}

export function close() {
    return {type: CLOSE_ADD_CAR_MODEL_FORM};
}

export function update(fieldName, value) {
    return {type: UPDATE_ADD_CAR_MODEL, payload: {fieldName: fieldName, value: value}};
}

export function validate(fieldNames) {
    return {type: VALIDATIONS_ADD_CAR_MODEL, payload: {fieldNames: fieldNames}};
}

