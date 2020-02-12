export const OPEN_ADD_TASK_FORM = 'OPEN_ADD_TASK_FORM';
export const CLOSE_ADD_TASK_FORM = 'CLOSE_ADD_TASK_FORM';
export const UPDATE_ADD_TASK = 'UPDATE_ADD_TASK';
export const VALIDATIONS_ADD_TASK = 'VALIDATIONS_ADD_TASK';

export function open() {
    return {type: OPEN_ADD_TASK_FORM};
}

export function close() {
    return {type: CLOSE_ADD_TASK_FORM};
}

export function update(fieldName, value) {
    return {type: UPDATE_ADD_TASK, payload: {fieldName: fieldName, value: value}};
}

export function validate(fieldNames) {
    return {type: VALIDATIONS_ADD_TASK, payload: {fieldNames: fieldNames}};
}

