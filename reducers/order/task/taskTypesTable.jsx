import { combineReducers } from 'redux';
import addTaskTypeForm from './addTaskTypeForm';
import editTaskTypeForm from './editTaskTypeForm';
import deleteTaskTypeDialog from './deleteTaskTypeDialog';
import {API} from "../../../rest/restAPI";
import * as auth from '../../../actions/auth';

const defaultTaskTypesTableState = {
    tableHeight: 0,
    taskTypes: []
};

function taskTypesTable(state = defaultTaskTypesTableState, action) {
    switch (action.type) {
        case auth.LOGOUT_SUCCESS:
            return {
                ...state,
                taskTypes: []
            };
        case API.events.taskTypes.actionSuccess:
            return {
                ...state,
                taskTypes: action.data
            };
        default:
            return state;
    }
}

const taskType = combineReducers({
    addTaskTypeForm,
    editTaskTypeForm,
    taskTypesTable,
    deleteTaskTypeDialog
});

export default taskType;