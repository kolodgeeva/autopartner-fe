import * as A from '../../../actions/order/task/deleteTaskDialog';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';
import {Stack} from 'immutable';
import {o2task} from '../../../utils/models';

const defaultDeleteTaskDialogState = {
    isOpen: false,
    initialTask: o2task({}),
    task: o2task({}),
    validations: Stack()
};

export default function deleteTaskDialog(state = defaultDeleteTaskDialogState, action) {
    switch (action.type) {
        case A.OPEN_DELETE_TASK_DIALOG:
            return {
                ...defaultDeleteTaskDialogState,
                initialTask: action.payload.task,
                task: action.payload.task,
                isOpen: true
            };
        case A.CLOSE_DELETE_TASK_DIALOG:
            return defaultDeleteTaskDialogState;
        case A.UPDATE_ACTIVE_TASK:
            return {
                ...state,
                task: state.task.set(action.payload.fieldName, action.payload.value)
            };
        case API.events.deleteTask.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case auth.LOGOUT_SUCCESS:
            return defaultDeleteTaskDialogState;
        default:
            return state;
    }
}