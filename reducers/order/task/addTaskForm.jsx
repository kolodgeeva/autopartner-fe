import * as A from '../../../actions/order/task/addTaskForm';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {o2task} from '../../../utils/models';
import {Stack} from 'immutable';

const defaultAddTaskFormState = {
    isOpen: false,
    task: o2task({}),
    validations: Stack(),
    taskTypesData: []
};

export default function addTaskForm(state = defaultAddTaskFormState, action) {
    switch (action.type) {
        case A.OPEN_ADD_TASK_FORM:
            return {
                ...state,
                isOpen: true
            };
        case A.CLOSE_ADD_TASK_FORM:
            return defaultAddTaskFormState;
        case A.UPDATE_ADD_TASK:
            return {
                ...state,
                task: state.task.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_ADD_TASK:
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
        case API.events.addTask.actionSuccess:
            // TODO validation from server
            return defaultAddTaskFormState;
        case API.events.addFormTaskTypes.actionSuccess:
            return {
                ...state,
                taskTypesData: action.data
            };
        case auth.LOGOUT_SUCCESS:
            return defaultAddTaskFormState;
        default:
            return state;
    }
}