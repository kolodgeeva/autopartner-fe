export const OPEN_ADD_CAR_FORM = 'OPEN_ADD_CAR_FORM';
export const CLOSE_ADD_CAR_FORM = 'CLOSE_ADD_CAR_FORM';
export const UPDATE_ADD_CAR = 'UPDATE_ADD_CAR';
export const VALIDATIONS_ADD_CAR = 'VALIDATIONS_ADD_CAR';

export function open() {
    return {type: OPEN_ADD_CAR_FORM};
}

export function close() {
    return {type: CLOSE_ADD_CAR_FORM};
}

export function update(fieldName, value) {
    return {type: UPDATE_ADD_CAR, payload: {fieldName: fieldName, value: value}};
}

export function validate(fieldNames) {
    return {type: VALIDATIONS_ADD_CAR, payload: {fieldNames: fieldNames}};
}

