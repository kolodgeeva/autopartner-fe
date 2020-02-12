import React, { Component } from 'react';

class AppComponent extends Component {
  auth() {
    return this.props.auth;
  }

  client() {
    return this.props.client;
  }

  carType() {
    return this.props.carType;
  }

  carBrand() {
    return this.props.carBrand;
  }

  carModel() {
    return this.props.carModel;
  }

  car() {
    return this.props.car;
  }

  taskType() {
    return this.props.taskType;
  }

  task() {
    return this.props.task;
  }

  materialType() {
    return this.props.materialType;
  }

  material() {
    return this.props.material;
  }

  order() {
    return this.props.order;
  }

  actions() {
    return this.props.actions;
  }

  authActions() {
    return this.actions().auth;
  }

  clientActions() {
    return this.actions().client;
  }

  carTypeActions() {
    return this.actions().carType;
  }

  carBrandActions() {
    return this.actions().carBrand;
  }

  carModelActions() {
    return this.actions().carModel;
  }

  carActions() {
    return this.actions().car;
  }

  taskTypeActions() {
    return this.actions().taskType;
  }

  taskActions() {
    return this.actions().task;
  }

  materialTypeActions() {
    return this.actions().materialType;
  }

  materialActions() {
    return this.actions().material;
  }

  orderActions() {
    return this.actions().order;
  }

  rest() {
    return this.actions().rest;
  }

  // //////////////////////// Client

  addClientForm() {
    return this.client().addClientForm;
  }

  editClientForm() {
    return this.client().editClientForm;
  }

  deleteClientDialog() {
    return this.client().deleteClientDialog;
  }

  addClientFormActions() {
    return this.clientActions().addClientForm;
  }

  editClientFormActions() {
    return this.clientActions().editClientForm;
  }

  deleteClientDialogActions() {
    return this.clientActions().deleteClientDialog;
  }

  clientsTable() {
    return this.client().clientsTable;
  }

  // //////////////////////// Car Type

  addCarTypeForm() {
    return this.carType().addCarTypeForm;
  }

  editCarTypeForm() {
    return this.carType().editCarTypeForm;
  }

  deleteCarTypeDialog() {
    return this.carType().deleteCarTypeDialog;
  }

  addCarTypeFormActions() {
    return this.carTypeActions().addCarTypeForm;
  }

  editCarTypeFormActions() {
    return this.carTypeActions().editCarTypeForm;
  }

  deleteCarTypeDialogActions() {
    return this.carTypeActions().deleteCarTypeDialog;
  }

  carTypesTable() {
    return this.carType().carTypesTable;
  }

  // //////////////////////// Car Brand

  addCarBrandForm() {
    return this.carBrand().addCarBrandForm;
  }

  editCarBrandForm() {
    return this.carBrand().editCarBrandForm;
  }

  deleteCarBrandDialog() {
    return this.carBrand().deleteCarBrandDialog;
  }

  addCarBrandFormActions() {
    return this.carBrandActions().addCarBrandForm;
  }

  editCarBrandFormActions() {
    return this.carBrandActions().editCarBrandForm;
  }

  deleteCarBrandDialogActions() {
    return this.carBrandActions().deleteCarBrandDialog;
  }

  carBrandsTable() {
    return this.carBrand().carBrandsTable;
  }

  // //////////////////////// Car Model

  addCarModelForm() {
    return this.carModel().addCarModelForm;
  }

  editCarModelForm() {
    return this.carModel().editCarModelForm;
  }

  deleteCarModelDialog() {
    return this.carModel().deleteCarModelDialog;
  }

  addCarModelFormActions() {
    return this.carModelActions().addCarModelForm;
  }

  editCarModelFormActions() {
    return this.carModelActions().editCarModelForm;
  }

  deleteCarModelDialogActions() {
    return this.carModelActions().deleteCarModelDialog;
  }

  carModelsTable() {
    return this.carModel().carModelsTable;
  }

  // //////////////////////// Car

  addCarForm() {
    return this.car().addCarForm;
  }

  editCarForm() {
    return this.car().editCarForm;
  }

  deleteCarDialog() {
    return this.car().deleteCarDialog;
  }

  addCarFormActions() {
    return this.carActions().addCarForm;
  }

  editCarFormActions() {
    return this.carActions().editCarForm;
  }

  deleteCarDialogActions() {
    return this.carActions().deleteCarDialog;
  }

  carsTable() {
    return this.car().carsTable;
  }

  // //////////////////////// Task Type

  addTaskTypeForm() {
    return this.taskType().addTaskTypeForm;
  }

  editTaskTypeForm() {
    return this.taskType().editTaskTypeForm;
  }

  deleteTaskTypeDialog() {
    return this.taskType().deleteTaskTypeDialog;
  }

  addTaskTypeFormActions() {
    return this.taskTypeActions().addTaskTypeForm;
  }

  editTaskTypeFormActions() {
    return this.taskTypeActions().editTaskTypeForm;
  }

  deleteTaskTypeDialogActions() {
    return this.taskTypeActions().deleteTaskTypeDialog;
  }

  taskTypesTable() {
    return this.taskType().taskTypesTable;
  }

  // //////////////////////// Task

  addTaskForm() {
    return this.task().addTaskForm;
  }

  editTaskForm() {
    return this.task().editTaskForm;
  }

  deleteTaskDialog() {
    return this.task().deleteTaskDialog;
  }

  addTaskFormActions() {
    return this.taskActions().addTaskForm;
  }

  editTaskFormActions() {
    return this.taskActions().editTaskForm;
  }

  deleteTaskDialogActions() {
    return this.taskActions().deleteTaskDialog;
  }

  tasksTable() {
    return this.task().tasksTable;
  }

  // //////////////////////// Material Type

  addMaterialTypeForm() {
    return this.materialType().addMaterialTypeForm;
  }

  editMaterialTypeForm() {
    return this.materialType().editMaterialTypeForm;
  }

  deleteMaterialTypeDialog() {
    return this.materialType().deleteMaterialTypeDialog;
  }

  addMaterialTypeFormActions() {
    return this.materialTypeActions().addMaterialTypeForm;
  }

  editMaterialTypeFormActions() {
    return this.materialTypeActions().editMaterialTypeForm;
  }

  deleteMaterialTypeDialogActions() {
    return this.materialTypeActions().deleteMaterialTypeDialog;
  }

  materialTypesTable() {
    return this.materialType().materialTypesTable;
  }

  // //////////////////////// Material

  addMaterialForm() {
    return this.material().addMaterialForm;
  }

  editMaterialForm() {
    return this.material().editMaterialForm;
  }

  deleteMaterialDialog() {
    return this.material().deleteMaterialDialog;
  }

  addMaterialFormActions() {
    return this.materialActions().addMaterialForm;
  }

  editMaterialFormActions() {
    return this.materialActions().editMaterialForm;
  }

  deleteMaterialDialogActions() {
    return this.materialActions().deleteMaterialDialog;
  }

  materialsTable() {
    return this.material().materialsTable;
  }

  // //////////////////////// Order

  addOrderForm() {
    return this.order().addOrderForm;
  }

  editOrderForm() {
    return this.order().editOrderForm;
  }

  deleteOrderDialog() {
    return this.order().deleteOrderDialog;
  }

  addOrderFormActions() {
    return this.orderActions().addOrderForm;
  }

  editOrderFormActions() {
    return this.orderActions().editOrderForm;
  }

  deleteOrderDialogActions() {
    return this.orderActions().deleteOrderDialog;
  }

  ordersTable() {
    return this.order().ordersTable;
  }
}

export default AppComponent;
