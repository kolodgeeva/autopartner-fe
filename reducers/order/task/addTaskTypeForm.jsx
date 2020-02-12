import * as A from '../../../actions/order/task/addTaskTypeForm';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {o2tt} from '../../../utils/models';
import {Stack} from 'immutable';

const defaultAddTaskTypeFormState = {
    isOpen: false,
    taskType: o2tt({}),
    validations: Stack()
};

export default function addTaskTypeForm(state = defaultAddTaskTypeFormState, action) {
    switch (action.type) {
        case A.OPEN_ADD_TASK_TYPE_FORM:
            return {
                ...state,
                isOpen: true
            };
        case A.CLOSE_ADD_TASK_TYPE_FORM:
            return defaultAddTaskTypeFormState;
        case A.UPDATE_ADD_TASK_TYPE:
            return {
                ...state,
                taskType: state.taskType.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_ADD_TASK_TYPE:
            const c = action.payload.fieldNames;
            const cl = state.taskType;
            const v = c && c.length > 0 ? state.validations.filter((v) => {
                return c.indexOf(v.fieldName) === -1
            }).concat(cl.validate(action.payload.fieldNames)) : cl.validate(action.payload.fieldNames);

            return {
                ...state,
                taskType: cl,
                validations: v
            };
        case API.events.addTaskType.actionSuccess:
            // TODO validation from server
            return defaultAddTaskTypeFormState;
        case auth.LOGOUT_SUCCESS:
            return defaultAddTaskTypeFormState;
        default:
            return state;
    }
}