export const OPEN_DELETE_TASK_TYPE_DIALOG = 'OPEN_DELETE_TASK_TYPE_DIALOG';
export const CLOSE_DELETE_TASK_TYPE_DIALOG = 'CLOSE_DELETE_TASK_TYPE_DIALOG';
export const UPDATE_ACTIVE_TASK_TYPE = 'UPDATE_ACTIVE_TASK_TYPE';

export function open(taskType) {
    return {type: OPEN_DELETE_TASK_TYPE_DIALOG, payload: {taskType: taskType}};
}

export function close() {
    return {type: CLOSE_DELETE_TASK_TYPE_DIALOG};
}

export function update(fieldName, value) {
    return {type: UPDATE_ACTIVE_TASK_TYPE, payload: {fieldName: fieldName, value: value}};
}