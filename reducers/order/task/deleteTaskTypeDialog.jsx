import * as A from '../../../actions/order/task/deleteTaskTypeDialog';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {Stack} from 'immutable';
import {o2tt} from '../../../utils/models';

const defaultDeleteTaskTypeDialogState = {
    isOpen: false,
    initialTaskType: o2tt({}),
    taskType: o2tt({}),
    validations: Stack()
};

export default function deleteTaskTypeDialog(state = defaultDeleteTaskTypeDialogState, action) {
    switch (action.type) {
        case A.OPEN_DELETE_TASK_TYPE_DIALOG:
            return {
                ...defaultDeleteTaskTypeDialogState,
                initialTaskType: action.payload.taskType,
                taskType: action.payload.taskType,
                isOpen: true
            };
        case A.CLOSE_DELETE_TASK_TYPE_DIALOG:
            return defaultDeleteTaskTypeDialogState;
        case A.UPDATE_ACTIVE_TASK_TYPE:
            return {
                ...state,
                taskType: state.taskType.set(action.payload.fieldName, action.payload.value)
            };
        case API.events.deleteTaskType.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case auth.LOGOUT_SUCCESS:
            return defaultDeleteTaskTypeDialogState;
        default:
            return state;
    }
}