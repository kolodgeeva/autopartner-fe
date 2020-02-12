import React from 'react';
import PropTypes from 'prop-types';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as MyRawTheme from '../../../src/material_ui_raw_theme_file';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import CarModelForm from './CarModelForm';
import CarModelDeleteDialog from './CarModelDeleteDialog';
import AppComponent from '../../AppComponent';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {carModelRequiredFieldList, carModelFieldsMap} from '../../../constants/constants';
import {o2cm} from '../../../utils/models';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

class CarModelsTable extends AppComponent {

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
                    <IconButton onClick={() => this.editCarModelFormActions().open(o2cm(row))}>
                        <ModeEdit/>
                    </IconButton>
                    <IconButton onClick={() => this.deleteCarModelDialogActions().open(o2cm(row))}>
                        <DeleteForever/>
                    </IconButton>
                </TableHeaderColumn>
                {colCell(row.name)}
                {colCell((row.carBrand) ? row.carBrand.name : '')}
            </TableRow>
        )
    };

    constructor() {
        super();
        this.setState({
            pageHeader: "Модели Автомобилей"
        })
    }

    componentDidMount() {
        // TODO
        this.rest().carModels();
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(MyRawTheme)};
    }

    deleteDialog() {
        return (
            <CarModelDeleteDialog
                properties={this.deleteCarModelDialog()}
                actions={{
                    ...this.deleteCarModelDialogActions(),
                    rest: {
                        delete: this.rest().deleteCarModel
                    }}}
            />
        )
    }

    forms() {
        return (<div>
            {<CarModelForm
                title="Добавить Модель"
                properties={this.addCarModelForm()}
                actions={{
                    ...this.addCarModelFormActions(),
                    rest: {
                        carBrands: this.rest().addFormCarBrands,
                        push: this.rest().addCarModel
                    }
                }}/>}
            {<CarModelForm
                title="Редактировать Модель"
                properties={this.editCarModelForm()}
                actions={{
                    ...this.editCarModelFormActions(),
                    rest: {
                        carBrands: this.rest().editFormCarBrands,
                        push: this.rest().editCarModel
                    }
                }}/>}
        </div>)
    }

    header() {
        return (
            <TableHeader selectable={false} displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn style={{width:'50px'}}>
                        <FloatingActionButton mini={true} onClick={this.addCarModelFormActions().open}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </TableHeaderColumn>
                    {carModelRequiredFieldList.map((t, i) => {
                            const info = carModelFieldsMap.get(t);
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
                        {this.carModelsTable().carModels.map(this.row)}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default CarModelsTable;
