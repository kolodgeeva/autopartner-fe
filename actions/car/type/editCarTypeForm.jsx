export const OPEN_EDIT_CAR_TYPE_FORM = 'OPEN_EDIT_CAR_TYPE_FORM';
export const CLOSE_EDIT_CAR_TYPE_FORM = 'CLOSE_EDIT_CAR_TYPE_FORM';
export const RESET_EDIT_CAR_TYPE_FORM = 'RESET_EDIT_CAR_TYPE_FORM';
export const UPDATE_EDIT_CAR_TYPE = 'UPDATE_EDIT_CAR_TYPE';
export const VALIDATIONS_EDIT_CAR_TYPE = 'VALIDATIONS_EDIT_CAR_TYPE';

export function open(carType) {
    return {type: OPEN_EDIT_CAR_TYPE_FORM, payload: {carType: carType}};
}

export function close() {
    return {type: CLOSE_EDIT_CAR_TYPE_FORM};
}

export function reset() {
    return {type: RESET_EDIT_CAR_TYPE_FORM};
}

export function update(fieldName, value) {
    return {type: UPDATE_EDIT_CAR_TYPE, payload: {fieldName: fieldName, value: value}};
}

export function validate(fieldNames) {
    return {type: VALIDATIONS_EDIT_CAR_TYPE, payload: {fieldNames: fieldNames}};
}
