export const OPEN_EDIT_CAR_BRAND_FORM = 'OPEN_EDIT_CAR_BRAND_FORM';
export const CLOSE_EDIT_CAR_BRAND_FORM = 'CLOSE_EDIT_CAR_BRAND_FORM';
export const RESET_EDIT_CAR_BRAND_FORM = 'RESET_EDIT_CAR_BRAND_FORM';
export const UPDATE_EDIT_CAR_BRAND = 'UPDATE_EDIT_CAR_BRAND';
export const VALIDATIONS_EDIT_CAR_BRAND = 'VALIDATIONS_EDIT_CAR_BRAND';

export function open(carBrand) {
    return {type: OPEN_EDIT_CAR_BRAND_FORM, payload: {carBrand: carBrand}};
}

export function close() {
    return {type: CLOSE_EDIT_CAR_BRAND_FORM};
}

export function reset() {
    return {type: RESET_EDIT_CAR_BRAND_FORM};
}

export function update(fieldName, value) {
    return {type: UPDATE_EDIT_CAR_BRAND, payload: {fieldName: fieldName, value: value}};
}

export function validate(fieldNames) {
    return {type: VALIDATIONS_EDIT_CAR_BRAND, payload: {fieldNames: fieldNames}};
}
