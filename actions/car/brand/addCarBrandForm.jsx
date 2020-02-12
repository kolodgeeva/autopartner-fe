export const OPEN_ADD_CAR_BRAND_FORM = 'OPEN_ADD_CAR_BRAND_FORM';
export const CLOSE_ADD_CAR_BRAND_FORM = 'CLOSE_ADD_CAR_BRAND_FORM';
export const UPDATE_ADD_CAR_BRAND = 'UPDATE_ADD_CAR_BRAND';
export const VALIDATIONS_ADD_CAR_BRAND = 'VALIDATIONS_ADD_CAR_BRAND';

export function open() {
    return {type: OPEN_ADD_CAR_BRAND_FORM};
}

export function close() {
    return {type: CLOSE_ADD_CAR_BRAND_FORM};
}

export function update(fieldName, value) {
    return {type: UPDATE_ADD_CAR_BRAND, payload: {fieldName: fieldName, value: value}};
}

export function validate(fieldNames) {
    return {type: VALIDATIONS_ADD_CAR_BRAND, payload: {fieldNames: fieldNames}};
}

