import React from 'react';
import PropTypes from 'prop-types';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as MyRawTheme from '../../../src/material_ui_raw_theme_file';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import TaskForm from './TaskForm';
import TaskDeleteDialog from './TaskDeleteDialog';
import AppComponent from '../../AppComponent';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {taskRequiredFieldList, taskFieldsMap} from '../../../constants/constants';
import {o2task} from '../../../utils/models';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

class TasksTable extends AppComponent {

    static get childContextTypes() {
        return {muiTheme: PropTypes.object};
    }

    row =  (row, index) => {
        function colCell(str) {
            return ( <TableRowColumn>{str}</TableRowColumn>)
        }
        return (
            <TableRow key={row.id} selectable={false}>
                <TableHeaderColumn style={{width:'50px'}}>
                    <IconButton onClick={() => this.editTaskFormActions().open(o2task(row))}>
                        <ModeEdit/>
                    </IconButton>
                    <IconButton onClick={() => this.deleteTaskDialogActions().open(o2task(row))}>
                        <DeleteForever/>
                    </IconButton>
                </TableHeaderColumn>
                {colCell(row.name)}
                {colCell((row.taskType) ? row.taskType.name : '')}
            </TableRow>
        )
    };

    constructor() {
        super();
        this.setState({
            pageHeader: "Работы"
        })
    }

    componentDidMount() {
        // TODO
        this.rest().tasks();
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(MyRawTheme)};
    }

    deleteDialog() {
        return (
            <TaskDeleteDialog
                properties={this.deleteTaskDialog()}
                actions={{
                    ...this.deleteTaskDialogActions(),
                    rest: {
                        delete: this.rest().deleteTask
                    }}}
            />
        )
    }

    forms() {
        return (<div>
            {<TaskForm
                title="Добавить Работу"
                properties={this.addTaskForm()}
                actions={{
                    ...this.addTaskFormActions(),
                    rest: {
                        taskTypes: this.rest().addFormTaskTypes,
                        push: this.rest().addTask
                    }
                }}/>}
            {<TaskForm
                title="Редактировать Работу"
                properties={this.editTaskForm()}
                actions={{
                    ...this.editTaskFormActions(),
                    rest: {
                        taskTypes: this.rest().editFormTaskTypes,
                        push: this.rest().editTask
                    }
                }}/>}
        </div>)
    }

    header() {
        return (
            <TableHeader selectable={false} displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn style={{width:'50px'}}>
                        <FloatingActionButton mini={true} onClick={this.addTaskFormActions().open}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </TableHeaderColumn>
                    {taskRequiredFieldList.map((t, i) => {
                            const info = taskFieldsMap.get(t);
                            return (
                                <TableHeaderColumn key={i}>{info.title}</TableHeaderColumn>
                            )
                        }
                    )}
                </TableRow>
            </TableHeader>
        )
    }

    render() {
        return (
            <div>
                {this.deleteDialog()}
                {this.forms()}
                <Table
                    className="dataTable"
                    fixedHeader={true}>
                    {this.header()}
                    <TableBody displayRowCheckbox={false}>
                        {this.tasksTable().tasks.map(this.row)}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default TasksTable;
