import React from 'react';
import PropTypes from 'prop-types';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as MyRawTheme from '../../src/material_ui_raw_theme_file';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import CarForm from './CarForm';
import CarDeleteDialog from './CarDeleteDialog';
import AppComponent from '../AppComponent';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {carRequiredFieldList, carFieldsMap} from '../../constants/constants';
import {o2car} from '../../utils/models';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

class CarsTable extends AppComponent {

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
                    <IconButton onClick={() => this.editCarFormActions().open(o2car(row))}>
                        <ModeEdit/>
                    </IconButton>
                    <IconButton onClick={() => this.deleteCarDialogActions().open(o2car(row))}>
                        <DeleteForever/>
                    </IconButton>
                </TableHeaderColumn>
                {colCell((row.client) ? row.client.firstName + " " + row.client.lastName : '')}
                {colCell((row.carModel) ? row.carModel.carBrand.name + " " + row.carModel.name : '')}
                {colCell(row.regNumber)}
                {colCell(row.vinCode)}
                {colCell(row.mileage)}
                {colCell(row.notes)}
            </TableRow>
        )
    };

    constructor() {
        super();
        this.setState({
            pageHeader: "Машины"
        })
    }

    componentDidMount() {
        // TODO
        this.rest().cars();
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(MyRawTheme)};
    }

    deleteDialog() {
        return (
            <CarDeleteDialog
                properties={this.deleteCarDialog()}
                actions={{
                    ...this.deleteCarDialogActions(),
                    rest: {
                        delete: this.rest().deleteCar
                    }}}
            />
        )
    }

    forms() {
        return (<div>
            {<CarForm
                title="Добавить Машину"
                properties={this.addCarForm()}
                actions={{
                    ...this.addCarFormActions(),
                    rest: {
                        carModels: this.rest().addFormCarModels,
                        clients: this.rest().addFormClients,
                        push: this.rest().addCar
                    }
                }}/>}
            {<CarForm
                title="Редактировать Машину"
                properties={this.editCarForm()}
                actions={{
                    ...this.editCarFormActions(),
                    rest: {
                        carModels: this.rest().editFormCarModels,
                        clients: this.rest().editFormClients,
                        push: this.rest().editCar
                    }
                }}/>}
        </div>)
    }

    header() {
        return (
            <TableHeader selectable={false} displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn style={{width:'50px'}}>
                        <FloatingActionButton mini={true} onClick={this.addCarFormActions().open}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </TableHeaderColumn>
                    {carRequiredFieldList.map((t, i) => {
                            const info = carFieldsMap.get(t);
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
                        {this.carsTable().cars.map(this.row)}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default CarsTable;
