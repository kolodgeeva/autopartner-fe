import { combineReducers } from 'redux';
import addTaskForm from './addTaskForm';
import editTaskForm from './editTaskForm';
import deleteTaskDialog from './deleteTaskDialog';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';

const defaultTasksTableState = {
    tableHeight: 0,
    tasks: []
};

function tasksTable(state = defaultTasksTableState, action) {
    switch (action.type) {
        case auth.LOGOUT_SUCCESS:
            return {
                ...state,
                tasks: []
            };
        case API.events.tasks.actionSuccess:
            return {
                ...state,
                tasks: action.data
            };
        default:
            return state;
    }
}

const task = combineReducers({
    addTaskForm,
    editTaskForm,
    tasksTable,
    deleteTaskDialog
});

export default task;