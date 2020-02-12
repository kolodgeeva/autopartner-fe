import React from 'react';
import PropTypes from 'prop-types';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as MyRawTheme from '../../../src/material_ui_raw_theme_file';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import MaterialTypeForm from './MaterialTypeForm';
import MaterialTypeDeleteDialog from './MaterialTypeDeleteDialog';
import AppComponent from '../../AppComponent';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {materialTypeRequiredFieldList, materialTypeFieldsMap} from '../../../constants/constants';
import {o2ct} from '../../../utils/models';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

class MaterialTypesTable extends AppComponent {

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
                    <IconButton onClick={() => this.editMaterialTypeFormActions().open(o2ct(row))}>
                        <ModeEdit/>
                    </IconButton>
                    <IconButton onClick={() => this.deleteMaterialTypeDialogActions().open(o2ct(row))}>
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
            pageHeader: "Типы Материалов"
        })
    }

    componentDidMount() {
        // TODO
        this.rest().materialTypes();
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(MyRawTheme)};
    }

    deleteDialog() {
        return (
            <MaterialTypeDeleteDialog
                properties={this.deleteMaterialTypeDialog()}
                actions={{
                    ...this.deleteMaterialTypeDialogActions(),
                    rest: {
                        delete: this.rest().deleteMaterialType
                    }}}
            />
        )
    }

    forms() {
        return (<div>
            {<MaterialTypeForm
                title="Добавить Тип"
                properties={this.addMaterialTypeForm()}
                actions={{
                                ...this.addMaterialTypeFormActions(),
                                rest: {
                                    push: this.rest().addMaterialType
                                }
                            }}/>}
            {<MaterialTypeForm
                title="Редактировать Тип"
                properties={this.editMaterialTypeForm()}
                actions={{
                ...this.editMaterialTypeFormActions(),
                        rest: {
                            push: this.rest().editMaterialType
                    }
                }}/>}
        </div>)
    }

    header() {
        return (
            <TableHeader selectable={false} displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn style={{width:'50px'}}>
                        <FloatingActionButton mini={true} onClick={this.addMaterialTypeFormActions().open}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </TableHeaderColumn>
                    {materialTypeRequiredFieldList.map((t, i) => {
                            const info = materialTypeFieldsMap.get(t);
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
                        {this.materialTypesTable().materialTypes.map(this.row)}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default MaterialTypesTable;
