import React from 'react';
import PropTypes from 'prop-types';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as MyRawTheme from '../../../src/material_ui_raw_theme_file';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import CarTypeForm from './CarTypeForm';
import CarTypeDeleteDialog from './CarTypeDeleteDialog';
import AppComponent from '../../AppComponent';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {carTypeRequiredFieldList, carTypeFieldsMap} from '../../../constants/constants';
import {o2ct} from '../../../utils/models';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

class CarTypesTable extends AppComponent {

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
                    <IconButton onClick={() => this.editCarTypeFormActions().open(o2ct(row))}>
                        <ModeEdit/>
                    </IconButton>
                    <IconButton onClick={() => this.deleteCarTypeDialogActions().open(o2ct(row))}>
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
        this.rest().carTypes();
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(MyRawTheme)};
    }

    deleteDialog() {
        return (
            <CarTypeDeleteDialog
                properties={this.deleteCarTypeDialog()}
                actions={{
                    ...this.deleteCarTypeDialogActions(),
                    rest: {
                        delete: this.rest().deleteCarType
                    }}}
            />
        )
    }

    forms() {
        return (<div>
            {<CarTypeForm
                title="Добавить Тип"
                properties={this.addCarTypeForm()}
                actions={{
                                ...this.addCarTypeFormActions(),
                                rest: {
                                    push: this.rest().addCarType
                                }
                            }}/>}
            {<CarTypeForm
                title="Редактировать Тип"
                properties={this.editCarTypeForm()}
                actions={{
                ...this.editCarTypeFormActions(),
                        rest: {
                            push: this.rest().editCarType
                    }
                }}/>}
        </div>)
    }

    header() {
        return (
            <TableHeader selectable={false} displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn style={{width:'50px'}}>
                        <FloatingActionButton mini={true} onClick={this.addCarTypeFormActions().open}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </TableHeaderColumn>
                    {carTypeRequiredFieldList.map((t, i) => {
                            const info = carTypeFieldsMap.get(t);
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
                        {this.carTypesTable().carTypes.map(this.row)}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default CarTypesTable;
