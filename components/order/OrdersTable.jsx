import React from 'react';
import PropTypes from 'prop-types';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as MyRawTheme from '../../src/material_ui_raw_theme_file';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import OrderForm from './OrderForm';
import OrderDeleteDialog from './OrderDeleteDialog';
import AppComponent from '../AppComponent';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {orderRequiredFieldList, orderFieldsMap} from '../../constants/constants';
import {o2order} from '../../utils/models';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

class OrdersTable extends AppComponent {

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
                    <IconButton onClick={() => this.editOrderFormActions().open(o2order(row))}>
                        <ModeEdit/>
                    </IconButton>
                    <IconButton onClick={() => this.deleteOrderDialogActions().open(o2order(row))}>
                        <DeleteForever/>
                    </IconButton>
                </TableHeaderColumn>
                {colCell(row.orderNumber)}
                {colCell((row.car.carModel) ? row.car.carModel.carBrand.name + " " + row.car.carModel.name : '')}
                {colCell(row.mileage)}
                {colCell(row.paymentType)}
                {colCell(row.status)}
                {colCell(row.note)}
            </TableRow>
        )
    };

    constructor() {
        super();
        this.setState({
            pageHeader: "Заказы"
        })
    }

    componentDidMount() {
        // TODO
        this.rest().orders();
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(MyRawTheme)};
    }

    deleteDialog() {
        return (
            <OrderDeleteDialog
                properties={this.deleteOrderDialog()}
                actions={{
                    ...this.deleteOrderDialogActions(),
                    rest: {
                        delete: this.rest().deleteOrder
                    }}}
            />
        )
    }

    forms() {
        return (<div>
            {<OrderForm
                title="Добавить Заказ"
                properties={this.addOrderForm()}
                actions={{
                    ...this.addOrderFormActions(),
                    rest: {
                        cars: this.rest().addFormOrderCars,
                        push: this.rest().addOrder
                    }
                }}/>}
            {<OrderForm
                title="Редактировать Заказ"
                properties={this.editOrderForm()}
                actions={{
                    ...this.editOrderFormActions(),
                    rest: {
                        cars: this.rest().editFormOrderCars,
                        push: this.rest().editOrder
                    }
                }}/>}
        </div>)
    }

    header() {
        return (
            <TableHeader selectable={false} displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn style={{width:'50px'}}>
                        <FloatingActionButton mini={true} onClick={this.addOrderFormActions().open}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </TableHeaderColumn>
                    {orderRequiredFieldList.map((t, i) => {
                            const info = orderFieldsMap.get(t);
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
                        {this.ordersTable().orders.map(this.row)}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default OrdersTable;
