import { combineReducers } from 'redux';
import auth from './auth';
import client from './client/clientsTable';
import carType from './car/type/carTypesTable';
import carBrand from './car/brand/carBrandTable';
import carModel from './car/model/carModelTable';
import car from './car/carsTable';
import taskType from './order/task/taskTypesTable';
import task from './order/task/TaskTable';
import materialType from './order/material/materialTypesTable';
import material from './order/material/materialTable';
import order from './order/ordersTable';
import { API } from '../rest/restAPI';

export default combineReducers({
  auth,
  client,
  carType,
  carBrand,
  carModel,
  car,
  taskType,
  task,
  materialType,
  material,
  order,
}, API.reducers);
