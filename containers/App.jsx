import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Client from '../components/Client';
import CarType from '../components/CarType';
import CarBrand from '../components/CarBrand';
import CarModel from '../components/CarModel';
import TaskType from '../components/TaskType';
import Task from '../components/Task';
import MaterialType from '../components/MaterialType';
import Material from '../components/Material';
import Car from '../components/Car';
import Order from '../components/Order';
import NotFound from '../components/NotFound';
import * as auth from '../actions/auth';
import * as addClientForm from '../actions/client/addClientForm';
import * as editClientForm from '../actions/client/editClientForm';
import * as deleteClientDialog from '../actions/client/deleteClientDialog';
import * as addCarTypeForm from '../actions/car/type/addCarTypeForm';
import * as editCarTypeForm from '../actions/car/type/editCarTypeForm';
import * as deleteCarTypeDialog from '../actions/car/type/deleteCarTypeDialog';
import * as addCarBrandForm from '../actions/car/brand/addCarBrandForm';
import * as editCarBrandForm from '../actions/car/brand/editCarBrandForm';
import * as deleteCarBrandDialog from '../actions/car/brand/deleteCarBrandDialog';
import * as addCarModelForm from '../actions/car/model/addCarModelForm';
import * as editCarModelForm from '../actions/car/model/editCarModelForm';
import * as deleteCarModelDialog from '../actions/car/model/deleteCarModelDialog';
import * as addCarForm from '../actions/car/addCarForm';
import * as editCarForm from '../actions/car/editCarForm';
import * as deleteCarDialog from '../actions/car/deleteCarDialog';
import * as addTaskTypeForm from '../actions/order/task/addTaskTypeForm';
import * as editTaskTypeForm from '../actions/order/task/editTaskTypeForm';
import * as deleteTaskTypeDialog from '../actions/order/task/deleteTaskTypeDialog';
import * as addTaskForm from '../actions/order/task/addTaskForm';
import * as editTaskForm from '../actions/order/task/editTaskForm';
import * as deleteTaskDialog from '../actions/order/task/deleteTaskDialog';
import * as addMaterialTypeForm from '../actions/order/material/addMaterialTypeForm';
import * as editMaterialTypeForm from '../actions/order/material/editMaterialTypeForm';
import * as deleteMaterialTypeDialog from '../actions/order/material/deleteMaterialTypeDialog';
import * as addMaterialForm from '../actions/order/material/addMaterialForm';
import * as editMaterialForm from '../actions/order/material/editMaterialForm';
import * as deleteMaterialDialog from '../actions/order/material/deleteMaterialDialog';
import * as addOrderForm from '../actions/order/addOrderForm';
import * as editOrderForm from '../actions/order/editOrderForm';
import * as deleteOrderDialog from '../actions/order/deleteOrderDialog';
import { API } from '../rest/restAPI';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/client">
            <Client {...this.props} />
          </Route>
          <Route exact path="/">
            <Client {...this.props} />
          </Route>
          <Route path="/order">
            <Order {...this.props} />
          </Route>
          <Route path="/material">
            <Material {...this.props} />
          </Route>
          <Route path="/carType">
            <CarType {...this.props} />
          </Route>
          <Route path="/carBrand">
            <CarBrand {...this.props} />
          </Route>
          <Route path="/carModel">
            <CarModel {...this.props} />
          </Route>
          <Route path="/taskType">
            <TaskType {...this.props} />
          </Route>
          <Route path="/task">
            <Task {...this.props} />
          </Route>
          <Route path="/materialType">
            <MaterialType {...this.props} />
          </Route>
          <Route path="/material">
            <Material {...this.props} />
          </Route>
          <Route path="/car">
            <Car {...this.props} />
          </Route>
          <Route path="*">
            <NotFound {...this.props} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      auth: bindActionCreators(auth, dispatch),
      client: {
        addClientForm: bindActionCreators(addClientForm, dispatch),
        editClientForm: bindActionCreators(editClientForm, dispatch),
        deleteClientDialog: bindActionCreators(deleteClientDialog, dispatch)
      },
      carType: {
        addCarTypeForm: bindActionCreators(addCarTypeForm, dispatch),
        editCarTypeForm: bindActionCreators(editCarTypeForm, dispatch),
        deleteCarTypeDialog: bindActionCreators(deleteCarTypeDialog, dispatch)
      },
      carBrand: {
        addCarBrandForm: bindActionCreators(addCarBrandForm, dispatch),
        editCarBrandForm: bindActionCreators(editCarBrandForm, dispatch),
        deleteCarBrandDialog: bindActionCreators(deleteCarBrandDialog, dispatch)
      },
      carModel: {
        addCarModelForm: bindActionCreators(addCarModelForm, dispatch),
        editCarModelForm: bindActionCreators(editCarModelForm, dispatch),
        deleteCarModelDialog: bindActionCreators(deleteCarModelDialog, dispatch)
      },
      car: {
        addCarForm: bindActionCreators(addCarForm, dispatch),
        editCarForm: bindActionCreators(editCarForm, dispatch),
        deleteCarDialog: bindActionCreators(deleteCarDialog, dispatch)
      },
      taskType: {
        addTaskTypeForm: bindActionCreators(addTaskTypeForm, dispatch),
        editTaskTypeForm: bindActionCreators(editTaskTypeForm, dispatch),
        deleteTaskTypeDialog: bindActionCreators(deleteTaskTypeDialog, dispatch)
      },
      task: {
        addTaskForm: bindActionCreators(addTaskForm, dispatch),
        editTaskForm: bindActionCreators(editTaskForm, dispatch),
        deleteTaskDialog: bindActionCreators(deleteTaskDialog, dispatch)
      },
      materialType: {
        addMaterialTypeForm: bindActionCreators(addMaterialTypeForm, dispatch),
        editMaterialTypeForm: bindActionCreators(editMaterialTypeForm, dispatch),
        deleteMaterialTypeDialog: bindActionCreators(deleteMaterialTypeDialog, dispatch)
      },
      material: {
        addMaterialForm: bindActionCreators(addMaterialForm, dispatch),
        editMaterialForm: bindActionCreators(editMaterialForm, dispatch),
        deleteMaterialDialog: bindActionCreators(deleteMaterialDialog, dispatch)
      },
      order: {
        addOrderForm: bindActionCreators(addOrderForm, dispatch),
        editOrderForm: bindActionCreators(editOrderForm, dispatch),
        deleteOrderDialog: bindActionCreators(deleteOrderDialog, dispatch)
      },
      rest: bindActionCreators(API.actions, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
