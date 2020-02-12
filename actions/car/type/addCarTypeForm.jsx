export const OPEN_ADD_CAR_TYPE_FORM = 'OPEN_ADD_CAR_TYPE_FORM';
export const CLOSE_ADD_CAR_TYPE_FORM = 'CLOSE_ADD_CAR_TYPE_FORM';
export const UPDATE_ADD_CAR_TYPE = 'UPDATE_ADD_CAR_TYPE';
export const VALIDATIONS_ADD_CAR_TYPE = 'VALIDATIONS_ADD_CAR_TYPE';

export function open() {
    return {type: OPEN_ADD_CAR_TYPE_FORM};
}

export function close() {
    return {type: CLOSE_ADD_CAR_TYPE_FORM};
}

export function update(fieldName, value) {
    return {type: UPDATE_ADD_CAR_TYPE, payload: {fieldName: fieldName, value: value}};
}

export function validate(fieldNames) {
    return {type: VALIDATIONS_ADD_CAR_TYPE, payload: {fieldNames: fieldNames}};
}

