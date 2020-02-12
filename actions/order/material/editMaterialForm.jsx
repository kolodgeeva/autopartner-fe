export const OPEN_EDIT_MATERIAL_FORM = 'OPEN_EDIT_MATERIAL_FORM';
export const CLOSE_EDIT_MATERIAL_FORM = 'CLOSE_EDIT_MATERIAL_FORM';
export const RESET_EDIT_MATERIAL_FORM = 'RESET_EDIT_MATERIAL_FORM';
export const UPDATE_EDIT_MATERIAL = 'UPDATE_EDIT_MATERIAL';
export const VALIDATIONS_EDIT_MATERIAL = 'VALIDATIONS_EDIT_MATERIAL';

export function open(material) {
    return {type: OPEN_EDIT_MATERIAL_FORM, payload: {material: material}};
}

export function close() {
    return {type: CLOSE_EDIT_MATERIAL_FORM};
}

export function reset() {
    return {type: RESET_EDIT_MATERIAL_FORM};
}

export function update(fieldName, value) {
    return {type: UPDATE_EDIT_MATERIAL, payload: {fieldName: fieldName, value: value}};
}

export function validate(fieldNames) {
    return {type: VALIDATIONS_EDIT_MATERIAL, payload: {fieldNames: fieldNames}};
}
