import React from 'react';
import PropTypes from 'prop-types';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as MyRawTheme from '../../../src/material_ui_raw_theme_file';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import MaterialForm from './MaterialForm';
import MaterialDeleteDialog from './MaterialDeleteDialog';
import AppComponent from '../../AppComponent';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {materialRequiredFieldList, materialFieldsMap} from '../../../constants/constants';
import {o2material} from '../../../utils/models';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

class MaterialsTable extends AppComponent {

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
                    <IconButton onClick={() => this.editMaterialFormActions().open(o2material(row))}>
                        <ModeEdit/>
                    </IconButton>
                    <IconButton onClick={() => this.deleteMaterialDialogActions().open(o2material(row))}>
                        <DeleteForever/>
                    </IconButton>
                </TableHeaderColumn>
                {colCell(row.name)}
                {colCell((row.materialType) ? row.materialType.name : '')}
            </TableRow>
        )
    };

    constructor() {
        super();
        this.setState({
            pageHeader: "Материалы"
        })
    }

    componentDidMount() {
        // TODO
        this.rest().materials();
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(MyRawTheme)};
    }

    deleteDialog() {
        return (
            <MaterialDeleteDialog
                properties={this.deleteMaterialDialog()}
                actions={{
                    ...this.deleteMaterialDialogActions(),
                    rest: {
                        delete: this.rest().deleteMaterial
                    }}}
            />
        )
    }

    forms() {
        return (<div>
            {<MaterialForm
                title="Добавить Материал"
                properties={this.addMaterialForm()}
                actions={{
                    ...this.addMaterialFormActions(),
                    rest: {
                        materialTypes: this.rest().addFormMaterialTypes,
                        push: this.rest().addMaterial
                    }
                }}/>}
            {<MaterialForm
                title="Редактировать Материал"
                properties={this.editMaterialForm()}
                actions={{
                    ...this.editMaterialFormActions(),
                    rest: {
                        materialTypes: this.rest().editFormMaterialTypes,
                        push: this.rest().editMaterial
                    }
                }}/>}
        </div>)
    }

    header() {
        return (
            <TableHeader selectable={false} displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn style={{width:'50px'}}>
                        <FloatingActionButton mini={true} onClick={this.addMaterialFormActions().open}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </TableHeaderColumn>
                    {materialRequiredFieldList.map((t, i) => {
                            const info = materialFieldsMap.get(t);
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
                        {this.materialsTable().materials.map(this.row)}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default MaterialsTable;
