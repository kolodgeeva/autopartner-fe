export const OPEN_EDIT_TASK_FORM = 'OPEN_EDIT_TASK_FORM';
export const CLOSE_EDIT_TASK_FORM = 'CLOSE_EDIT_TASK_FORM';
export const RESET_EDIT_TASK_FORM = 'RESET_EDIT_TASK_FORM';
export const UPDATE_EDIT_TASK = 'UPDATE_EDIT_TASK';
export const VALIDATIONS_EDIT_TASK = 'VALIDATIONS_EDIT_TASK';

export function open(task) {
    return {type: OPEN_EDIT_TASK_FORM, payload: {task: task}};
}

export function close() {
    return {type: CLOSE_EDIT_TASK_FORM};
}

export function reset() {
    return {type: RESET_EDIT_TASK_FORM};
}

export function update(fieldName, value) {
    return {type: UPDATE_EDIT_TASK, payload: {fieldName: fieldName, value: value}};
}

export function validate(fieldNames) {
    return {type: VALIDATIONS_EDIT_TASK, payload: {fieldNames: fieldNames}};
}
