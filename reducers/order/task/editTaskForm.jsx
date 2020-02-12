import * as A from '../../../actions/order/task/editTaskForm';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {Stack} from 'immutable';
import {o2task} from '../../../utils/models';

const defaultEditTaskFormState = {
    isOpen: false,
    initialTask: o2task({}),
    task: o2task({}),
    validations: Stack(),
    taskTypesData: []
};

export default function editTaskForm(state = defaultEditTaskFormState, action) {
    switch (action.type) {
        case A.OPEN_EDIT_TASK_FORM:
            return {
                ...defaultEditTaskFormState,
                initialTask: action.payload.task,
                task: action.payload.task,
                isOpen: true
            };
        case A.CLOSE_EDIT_TASK_FORM:
            return defaultEditTaskFormState;
        case A.RESET_EDIT_TASK_FORM:
            return {
                ...defaultEditTaskFormState,
                initialTask: state.initialTask,
                task: state.initialTask,
                isOpen: true
            };
        case A.UPDATE_EDIT_TASK:
            return {
                ...state,
                task: state.task.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_EDIT_TASK:
            const c = action.payload.fieldNames;
            const cb = state.task;
            const v = c && c.length > 0 ? state.validations.filter((v) => {
                return c.indexOf(v.fieldName) === -1
            }).concat(cb.validate(action.payload.fieldNames)) : cb.validate(action.payload.fieldNames);

            return {
                ...state,
                task: cb,
                validations: v
            };
        case API.events.editTask.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case API.events.editFormTaskTypes.actionSuccess:
            return {
                ...state,
                taskTypesData: action.data
            };
        case auth.LOGOUT_SUCCESS:
            return defaultEditTaskFormState;
        default:
            return state;
    }
}