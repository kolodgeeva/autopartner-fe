export const OPEN_ADD_MATERIAL_FORM = 'OPEN_ADD_MATERIAL_FORM';
export const CLOSE_ADD_MATERIAL_FORM = 'CLOSE_ADD_MATERIAL_FORM';
export const UPDATE_ADD_MATERIAL = 'UPDATE_ADD_MATERIAL';
export const VALIDATIONS_ADD_MATERIAL = 'VALIDATIONS_ADD_MATERIAL';

export function open() {
    return {type: OPEN_ADD_MATERIAL_FORM};
}

export function close() {
    return {type: CLOSE_ADD_MATERIAL_FORM};
}

export function update(fieldName, value) {
    return {type: UPDATE_ADD_MATERIAL, payload: {fieldName: fieldName, value: value}};
}

export function validate(fieldNames) {
    return {type: VALIDATIONS_ADD_MATERIAL, payload: {fieldNames: fieldNames}};
}

