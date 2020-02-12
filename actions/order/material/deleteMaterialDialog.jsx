export const OPEN_DELETE_MATERIAL_DIALOG = 'OPEN_DELETE_MATERIAL_DIALOG';
export const CLOSE_DELETE_MATERIAL_DIALOG = 'CLOSE_DELETE_MATERIAL_DIALOG';
export const UPDATE_ACTIVE_MATERIAL = 'UPDATE_ACTIVE_MATERIAL';

export function open(material) {
    return {type: OPEN_DELETE_MATERIAL_DIALOG, payload: {material: material}};
}

export function close() {
    return {type: CLOSE_DELETE_MATERIAL_DIALOG};
}

export function update(fieldName, value) {
    return {type: UPDATE_ACTIVE_MATERIAL, payload: {fieldName: fieldName, value: value}};
}