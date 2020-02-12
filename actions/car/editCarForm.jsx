export const OPEN_EDIT_CAR_FORM = 'OPEN_EDIT_CAR_FORM';
export const CLOSE_EDIT_CAR_FORM = 'CLOSE_EDIT_CAR_FORM';
export const RESET_EDIT_CAR_FORM = 'RESET_EDIT_CAR_FORM';
export const UPDATE_EDIT_CAR = 'UPDATE_EDIT_CAR';
export const VALIDATIONS_EDIT_CAR = 'VALIDATIONS_EDIT_CAR';

export function open(car) {
    return {type: OPEN_EDIT_CAR_FORM, payload: {car: car}};
}

export function close() {
    return {type: CLOSE_EDIT_CAR_FORM};
}

export function reset() {
    return {type: RESET_EDIT_CAR_FORM};
}

export function update(fieldName, value) {
    return {type: UPDATE_EDIT_CAR, payload: {fieldName: fieldName, value: value}};
}

export function validate(fieldNames) {
    return {type: VALIDATIONS_EDIT_CAR, payload: {fieldNames: fieldNames}};
}
