import * as A from '../../../actions/order/task/editTaskTypeForm';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {Stack} from 'immutable';
import {o2tt} from '../../../utils/models';

const defaultEditTaskTypeFormState = {
    isOpen: false,
    initialTaskType: o2tt({}),
    taskType: o2tt({}),
    validations: Stack()
};

export default function editTaskTypeForm(state = defaultEditTaskTypeFormState, action) {
    switch (action.type) {
        case A.OPEN_EDIT_TASK_TYPE_FORM:
            return {
                ...defaultEditTaskTypeFormState,
                initialTaskType: action.payload.taskType,
                taskType: action.payload.taskType,
                isOpen: true
            };
        case A.CLOSE_EDIT_TASK_TYPE_FORM:
            return defaultEditTaskTypeFormState;
        case A.RESET_EDIT_TASK_TYPE_FORM:
            return {
                ...defaultEditTaskTypeFormState,
                initialTaskType: state.initialTaskType,
                taskType: state.initialTaskType,
                isOpen: true
            };
        case A.UPDATE_EDIT_TASK_TYPE:
            return {
                ...state,
                taskType: state.taskType.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_EDIT_TASK_TYPE:
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
        case API.events.editTaskType.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case auth.LOGOUT_SUCCESS:
            return defaultEditTaskTypeFormState;
        default:
            return state;
    }
}