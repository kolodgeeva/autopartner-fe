export const OPEN_DELETE_MATERIAL_TYPE_DIALOG = 'OPEN_DELETE_MATERIAL_TYPE_DIALOG';
export const CLOSE_DELETE_MATERIAL_TYPE_DIALOG = 'CLOSE_DELETE_MATERIAL_TYPE_DIALOG';
export const UPDATE_ACTIVE_MATERIAL_TYPE = 'UPDATE_ACTIVE_MATERIAL_TYPE';

export function open(materialType) {
    return {type: OPEN_DELETE_MATERIAL_TYPE_DIALOG, payload: {materialType: materialType}};
}

export function close() {
    return {type: CLOSE_DELETE_MATERIAL_TYPE_DIALOG};
}

export function update(fieldName, value) {
    return {type: UPDATE_ACTIVE_MATERIAL_TYPE, payload: {fieldName: fieldName, value: value}};
}