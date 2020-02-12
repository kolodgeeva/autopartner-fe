import React from 'react';
import PropTypes from 'prop-types';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as MyRawTheme from '../../../src/material_ui_raw_theme_file';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import CarBrandForm from './CarBrandForm';
import CarBrandDeleteDialog from './CarBrandDeleteDialog';
import AppComponent from '../../AppComponent';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {carBrandRequiredFieldList, carBrandFieldsMap} from '../../../constants/constants';
import {o2cb} from '../../../utils/models';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

class CarBrandsTable extends AppComponent {

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
                    <IconButton onClick={() => this.editCarBrandFormActions().open(o2cb(row))}>
                        <ModeEdit/>
                    </IconButton>
                    <IconButton onClick={() => this.deleteCarBrandDialogActions().open(o2cb(row))}>
                        <DeleteForever/>
                    </IconButton>
                </TableHeaderColumn>
                {colCell(row.name)}
                {colCell((row.carType) ? row.carType.name : '')}
            </TableRow>
        )
    };

    constructor() {
        super();
        this.setState({
            pageHeader: "Марки Автомобилей"
        })
    }

    componentDidMount() {
        // TODO
        this.rest().carBrands();
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(MyRawTheme)};
    }

    deleteDialog() {
        return (
            <CarBrandDeleteDialog
                properties={this.deleteCarBrandDialog()}
                actions={{
                    ...this.deleteCarBrandDialogActions(),
                    rest: {
                        delete: this.rest().deleteCarBrand
                    }}}
            />
        )
    }

    forms() {
        return (<div>
            {<CarBrandForm
                title="Добавить Тип"
                properties={this.addCarBrandForm()}
                actions={{
                    ...this.addCarBrandFormActions(),
                    rest: {
                        carTypes: this.rest().addFormCarTypes,
                        push: this.rest().addCarBrand
                    }
                }}/>}
            {<CarBrandForm
                title="Редактировать Тип"
                properties={this.editCarBrandForm()}
                actions={{
                    ...this.editCarBrandFormActions(),
                    rest: {
                        carTypes: this.rest().editFormCarTypes,
                        push: this.rest().editCarBrand
                    }
                }}/>}
        </div>)
    }

    header() {
        return (
            <TableHeader selectable={false} displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn style={{width:'50px'}}>
                        <FloatingActionButton mini={true} onClick={this.addCarBrandFormActions().open}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </TableHeaderColumn>
                    {carBrandRequiredFieldList.map((t, i) => {
                            const info = carBrandFieldsMap.get(t);
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
                        {this.carBrandsTable().carBrands.map(this.row)}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default CarBrandsTable;
