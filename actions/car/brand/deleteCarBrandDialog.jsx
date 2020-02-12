export const OPEN_DELETE_CAR_BRAND_DIALOG = 'OPEN_DELETE_CAR_BRAND_DIALOG';
export const CLOSE_DELETE_CAR_BRAND_DIALOG = 'CLOSE_DELETE_CAR_BRAND_DIALOG';
export const UPDATE_ACTIVE_CAR_BRAND = 'UPDATE_ACTIVE_CAR_BRAND';

export function open(carBrand) {
    return {type: OPEN_DELETE_CAR_BRAND_DIALOG, payload: {carBrand: carBrand}};
}

export function close() {
    return {type: CLOSE_DELETE_CAR_BRAND_DIALOG};
}

export function update(fieldName, value) {
    return {type: UPDATE_ACTIVE_CAR_BRAND, payload: {fieldName: fieldName, value: value}};
}