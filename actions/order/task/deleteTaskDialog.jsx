export const OPEN_DELETE_TASK_DIALOG = 'OPEN_DELETE_TASK_DIALOG';
export const CLOSE_DELETE_TASK_DIALOG = 'CLOSE_DELETE_TASK_DIALOG';
export const UPDATE_ACTIVE_TASK = 'UPDATE_ACTIVE_TASK';

export function open(task) {
    return {type: OPEN_DELETE_TASK_DIALOG, payload: {task: task}};
}

export function close() {
    return {type: CLOSE_DELETE_TASK_DIALOG};
}

export function update(fieldName, value) {
    return {type: UPDATE_ACTIVE_TASK, payload: {fieldName: fieldName, value: value}};
}