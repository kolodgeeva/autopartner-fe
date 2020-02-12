import React from 'react';
import PropTypes from 'prop-types';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as MyRawTheme from '../../../src/material_ui_raw_theme_file';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import TaskTypeForm from './TaskTypeForm';
import TaskTypeDeleteDialog from './TaskTypeDeleteDialog';
import AppComponent from '../../AppComponent';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {taskTypeRequiredFieldList, taskTypeFieldsMap} from '../../../constants/constants';
import {o2ct} from '../../../utils/models';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

class TaskTypesTable extends AppComponent {

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
                    <IconButton onClick={() => this.editTaskTypeFormActions().open(o2ct(row))}>
                        <ModeEdit/>
                    </IconButton>
                    <IconButton onClick={() => this.deleteTaskTypeDialogActions().open(o2ct(row))}>
                        <DeleteForever/>
                    </IconButton>
                </TableHeaderColumn>
                {colCell(row.name)}
            </TableRow>
        )
    };

    constructor() {
        super();
        this.setState({
            pageHeader: "Типы Автомобилей"
        })
    }

    componentDidMount() {
        // TODO
        this.rest().taskTypes();
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(MyRawTheme)};
    }

    deleteDialog() {
        return (
            <TaskTypeDeleteDialog
                properties={this.deleteTaskTypeDialog()}
                actions={{
                    ...this.deleteTaskTypeDialogActions(),
                    rest: {
                        delete: this.rest().deleteTaskType
                    }}}
            />
        )
    }

    forms() {
        return (<div>
            {<TaskTypeForm
                title="Добавить Тип"
                properties={this.addTaskTypeForm()}
                actions={{
                                ...this.addTaskTypeFormActions(),
                                rest: {
                                    push: this.rest().addTaskType
                                }
                            }}/>}
            {<TaskTypeForm
                title="Редактировать Тип"
                properties={this.editTaskTypeForm()}
                actions={{
                ...this.editTaskTypeFormActions(),
                        rest: {
                            push: this.rest().editTaskType
                    }
                }}/>}
        </div>)
    }

    header() {
        return (
            <TableHeader selectable={false} displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn style={{width:'50px'}}>
                        <FloatingActionButton mini={true} onClick={this.addTaskTypeFormActions().open}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </TableHeaderColumn>
                    {taskTypeRequiredFieldList.map((t, i) => {
                            const info = taskTypeFieldsMap.get(t);
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
                        {this.taskTypesTable().taskTypes.map(this.row)}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default TaskTypesTable;
