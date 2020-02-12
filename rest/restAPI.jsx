import reduxApi, {transformers} from "redux-api";
import adapterFetch from "redux-api/lib/adapters/fetch";
import * as T from '../utils/transform';
import fetch from "fbjs/lib/fetch";

import {host} from '../constants/constants';
import ES6Promise from 'es6-promise';

export const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export const API = reduxApi({
    jwtUpdate: {
        url: host + 'auth/refresh',
        options: {
            method: "GET"
        },
        postfetch: [
            function ({dispatch, actions, getState}) {
                if (getState().auth.isAuthenticated)
                    dispatch(function (dispatch) {
                        setTimeout(() => dispatch(actions.jwtUpdate()), localStorage.getItem('tm'))
                    })
            },
            function ({dispatch, actions}) {
                dispatch(actions.profile())
            }
        ]
    },
    profile: {
        url: host + 'api/profile',
        transformer: T.userTransformer,
        postfetch: [
            function ({dispatch, actions}) {
                dispatch(actions.clients())
            }
        ]
    },
    clients: {
        url: host + 'api/client',
        transformer: T.defaultTransformer
    },
    addClient: {
        url: host + 'api/client',
        options: function (url, params, getState) {
            const client = getState().client.addClientForm.client;
            return {
                ...params,
                method: "POST",
                body: client.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().client.addClientForm.isOpen) {
                    dispatch(actions.clients());
                }
            }
        ]
    },
    editClient: {
        url: host + 'api/client',
        options: function (url, params, getState) {
            const client = getState().client.editClientForm.client;
            return {
                ...params,
                method: "POST",
                body: client.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().client.editClientForm.isOpen) {
                    dispatch(actions.clients());
                }
            }
        ]
    },
    deleteClient: {
        url: host + 'api/client',
        options: function (url, params, getState) {
            const client = getState().client.deleteClientDialog.client;
            client.set('active', false);
            return {
                ...params,
                method: "POST",
                body: client.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().client.deleteClientDialog.isOpen) {
                    dispatch(actions.clients());
                }
            }
        ]
    },


    /////////////////////////// CAR TYPE REST ///////////////////////////

    carTypes: {
        url: host + 'api/car/type',
        transformer: T.defaultTransformer
    },
    addCarType: {
        url: host + 'api/car/type',
        options: function (url, params, getState) {
            const carType = getState().carType.addCarTypeForm.carType;
            return {
                ...params,
                method: "POST",
                body: carType.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().carType.addCarTypeForm.isOpen) {
                    dispatch(actions.carTypes());
                }
            }
        ]
    },
    editCarType: {
        url: host + 'api/car/type',
        options: function (url, params, getState) {
            const carType = getState().carType.editCarTypeForm.carType;
            return {
                ...params,
                method: "POST",
                body: carType.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().carType.editCarTypeForm.isOpen) {
                    dispatch(actions.carTypes());
                }
            }
        ]
    },
    deleteCarType: {
        url: host + 'api/car/type',
        options: function (url, params, getState) {

            const carType = getState().carType.deleteCarTypeDialog.carType;
            carType.set('active', false);

            return {
                ...params,
                method: "POST",
                body: carType.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().carType.deleteCarTypeDialog.isOpen) {
                    dispatch(actions.carTypes());
                }
            }
        ]
    },

    /////////////////////////// CAR BRAND REST ///////////////////////////

    carBrands: {
        url: host + 'api/car/brand',
        transformer: T.defaultTransformer
    },
    addFormCarTypes: {
        url: host + 'api/car/type',
        transformer: T.defaultTransformer
    },
    editFormCarTypes: {
        url: host + 'api/car/type',
        transformer: T.defaultTransformer
    },
    addCarBrand: {
        url: host + 'api/car/brand',
        options: function (url, params, getState) {
            const carBrand = getState().carBrand.addCarBrandForm.carBrand;
            return {
                ...params,
                method: "POST",
                body: carBrand.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().carBrand.addCarBrandForm.isOpen) {
                    dispatch(actions.carBrands());
                }
            }
        ]
    },
    editCarBrand: {
        url: host + 'api/car/brand',
        options: function (url, params, getState) {
            const carBrand = getState().carBrand.editCarBrandForm.carBrand;
            return {
                ...params,
                method: "POST",
                body: carBrand.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().carBrand.editCarBrandForm.isOpen) {
                    dispatch(actions.carBrands());
                }
            }
        ]
    },
    deleteCarBrand: {
        url: host + 'api/car/brand',
        options: function (url, params, getState) {

            const carBrand = getState().carBrand.deleteCarBrandDialog.carBrand;
            carBrand.set('active', false);

            return {
                ...params,
                method: "POST",
                body: carBrand.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().carBrand.deleteCarBrandDialog.isOpen) {
                    dispatch(actions.carBrands());
                }
            }
        ]
    },

    /////////////////////////// CAR MODEL REST ///////////////////////////

    carModels: {
        url: host + 'api/car/model',
        transformer: T.defaultTransformer
    },
    addFormCarBrands: {
        url: host + 'api/car/brand',
        transformer: T.defaultTransformer
    },
    editFormCarBrands: {
        url: host + 'api/car/brand',
        transformer: T.defaultTransformer
    },
    addCarModel: {
        url: host + 'api/car/model',
        options: function (url, params, getState) {
            const carModel = getState().carModel.addCarModelForm.carModel;
            return {
                ...params,
                method: "POST",
                body: carModel.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().carModel.addCarModelForm.isOpen) {
                    dispatch(actions.carModels());
                }
            }
        ]
    },
    editCarModel: {
        url: host + 'api/car/model',
        options: function (url, params, getState) {
            const carModel = getState().carModel.editCarModelForm.carModel;
            return {
                ...params,
                method: "POST",
                body: carModel.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().carModel.editCarModelForm.isOpen) {
                    dispatch(actions.carModels());
                }
            }
        ]
    },
    deleteCarModel: {
        url: host + 'api/car/model',
        options: function (url, params, getState) {

            const carModel = getState().carModel.deleteCarModelDialog.carModel;
            carModel.set('active', false);

            return {
                ...params,
                method: "POST",
                body: carModel.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().carModel.deleteCarModelDialog.isOpen) {
                    dispatch(actions.carModels());
                }
            }
        ]
    },

    /////////////////////////// CAR REST ///////////////////////////

    cars: {
        url: host + 'api/car',
        transformer: T.defaultTransformer
    },
    addFormCarModels: {
        url: host + 'api/car/model',
        transformer: T.defaultTransformer
    },
    addFormClients: {
        url: host + 'api/client',
        transformer: T.defaultTransformer
    },
    editFormCarModels: {
        url: host + 'api/car/model',
        transformer: T.defaultTransformer
    },
    editFormClients: {
        url: host + 'api/client',
        transformer: T.defaultTransformer
    },
    addCar: {
        url: host + 'api/car',
        options: function (url, params, getState) {
            const car = getState().car.addCarForm.car;
            return {
                ...params,
                method: "POST",
                body: car.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().car.addCarForm.isOpen) {
                    dispatch(actions.cars());
                }
            }
        ]
    },
    editCar: {
        url: host + 'api/car',
        options: function (url, params, getState) {
            const car = getState().car.editCarForm.car;
            return {
                ...params,
                method: "POST",
                body: car.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().car.editCarForm.isOpen) {
                    dispatch(actions.cars());
                }
            }
        ]
    },
    deleteCar: {
        url: host + 'api/car',
        options: function (url, params, getState) {

            const car = getState().car.deleteCarDialog.car;
            car.set('active', false);

            return {
                ...params,
                method: "POST",
                body: car.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().car.deleteCarDialog.isOpen) {
                    dispatch(actions.cars());
                }
            }
        ]
    },

    ///////////////////////////  TASK TYPE REST ///////////////////////////

    taskTypes: {
        url: host + 'api/task/type',
        transformer: T.defaultTransformer
    },
    addTaskType: {
        url: host + 'api/task/type',
        options: function (url, params, getState) {
            const taskType = getState().taskType.addTaskTypeForm.taskType;
            return {
                ...params,
                method: "POST",
                body: taskType.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().taskType.addTaskTypeForm.isOpen) {
                    dispatch(actions.taskTypes());
                }
            }
        ]
    },
    editTaskType: {
        url: host + 'api/task/type',
        options: function (url, params, getState) {
            const taskType = getState().taskType.editTaskTypeForm.taskType;
            return {
                ...params,
                method: "POST",
                body: taskType.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().taskType.editTaskTypeForm.isOpen) {
                    dispatch(actions.taskTypes());
                }
            }
        ]
    },
    deleteTaskType: {
        url: host + 'api/task/type',
        options: function (url, params, getState) {

            const taskType = getState().taskType.deleteTaskTypeDialog.taskType;
            taskType.set('active', false);

            return {
                ...params,
                method: "POST",
                body: taskType.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().taskType.deleteTaskTypeDialog.isOpen) {
                    dispatch(actions.taskTypes());
                }
            }
        ]
    },

    /////////////////////////// TASK REST ///////////////////////////

    tasks: {
        url: host + 'api/task',
        transformer: T.defaultTransformer
    },
    addFormTaskTypes: {
        url: host + 'api/task/type',
        transformer: T.defaultTransformer
    },
    editFormTaskTypes: {
        url: host + 'api/task/type',
        transformer: T.defaultTransformer
    },
    addTask: {
        url: host + 'api/task',
        options: function (url, params, getState) {
            const task = getState().task.addTaskForm.task;
            return {
                ...params,
                method: "POST",
                body: task.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().task.addTaskForm.isOpen) {
                    dispatch(actions.tasks());
                }
            }
        ]
    },
    editTask: {
        url: host + 'api/task',
        options: function (url, params, getState) {
            const task = getState().task.editTaskForm.task;
            return {
                ...params,
                method: "POST",
                body: task.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().task.editTaskForm.isOpen) {
                    dispatch(actions.tasks());
                }
            }
        ]
    },
    deleteTask: {
        url: host + 'api/task',
        options: function (url, params, getState) {

            const task = getState().task.deleteTaskDialog.task;
            task.set('active', false);

            return {
                ...params,
                method: "POST",
                body: task.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().task.deleteTaskDialog.isOpen) {
                    dispatch(actions.tasks());
                }
            }
        ]
    },

    ///////////////////////////  MATERIAL TYPE REST ///////////////////////////

    materialTypes: {
        url: host + 'api/material/type',
        transformer: T.defaultTransformer
    },
    addMaterialType: {
        url: host + 'api/material/type',
        options: function (url, params, getState) {
            const materialType = getState().materialType.addMaterialTypeForm.materialType;
            return {
                ...params,
                method: "POST",
                body: materialType.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().materialType.addMaterialTypeForm.isOpen) {
                    dispatch(actions.materialTypes());
                }
            }
        ]
    },
    editMaterialType: {
        url: host + 'api/material/type',
        options: function (url, params, getState) {
            const materialType = getState().materialType.editMaterialTypeForm.materialType;
            return {
                ...params,
                method: "POST",
                body: materialType.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().materialType.editMaterialTypeForm.isOpen) {
                    dispatch(actions.materialTypes());
                }
            }
        ]
    },
    deleteMaterialType: {
        url: host + 'api/material/type',
        options: function (url, params, getState) {

            const materialType = getState().materialType.deleteMaterialTypeDialog.materialType;
            materialType.set('active', false);

            return {
                ...params,
                method: "POST",
                body: materialType.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().materialType.deleteMaterialTypeDialog.isOpen) {
                    dispatch(actions.materialTypes());
                }
            }
        ]
    },

    /////////////////////////// MATERIAL REST ///////////////////////////

    materials: {
        url: host + 'api/material',
        transformer: T.defaultTransformer
    },
    addFormMaterialTypes: {
        url: host + 'api/material/type',
        transformer: T.defaultTransformer
    },
    editFormMaterialTypes: {
        url: host + 'api/material/type',
        transformer: T.defaultTransformer
    },
    addMaterial: {
        url: host + 'api/material',
        options: function (url, params, getState) {
            const material = getState().material.addMaterialForm.material;
            return {
                ...params,
                method: "POST",
                body: material.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().material.addMaterialForm.isOpen) {
                    dispatch(actions.materials());
                }
            }
        ]
    },
    editMaterial: {
        url: host + 'api/material',
        options: function (url, params, getState) {
            const material = getState().material.editMaterialForm.material;
            return {
                ...params,
                method: "POST",
                body: material.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().material.editMaterialForm.isOpen) {
                    dispatch(actions.materials());
                }
            }
        ]
    },
    deleteMaterial: {
        url: host + 'api/material',
        options: function (url, params, getState) {

            const material = getState().material.deleteMaterialDialog.material;
            material.set('active', false);

            return {
                ...params,
                method: "POST",
                body: material.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().material.deleteMaterialDialog.isOpen) {
                    dispatch(actions.materials());
                }
            }
        ]
    },

    /////////////////////////// ORDER REST ///////////////////////////

    orders: {
        url: host + 'api/order',
        transformer: T.defaultTransformer
    },
    addFormOrderCars: {
        url: host + 'api/car',
        transformer: T.defaultTransformer
    },
    editFormOrderCars: {
        url: host + 'api/car',
        transformer: T.defaultTransformer
    },
    addOrder: {
        url: host + 'api/order',
        options: function (url, params, getState) {
            const order = getState().order.addOrderForm.order;
            return {
                ...params,
                method: "POST",
                body: order.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().order.addOrderForm.isOpen) {
                    dispatch(actions.orders());
                }
            }
        ]
    },
    editOrder: {
        url: host + 'api/order',
        options: function (url, params, getState) {
            const order = getState().order.editOrderForm.order;
            return {
                ...params,
                method: "POST",
                body: order.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().order.editOrderForm.isOpen) {
                    dispatch(actions.orders());
                }
            }
        ]
    },
    deleteOrder: {
        url: host + 'api/order',
        options: function (url, params, getState) {

            const order = getState().order.deleteOrderDialog.order;
            order.set('active', false);

            return {
                ...params,
                method: "POST",
                body: order.toJSON()
            };
        },
        postfetch: [
            function ({actions, dispatch, getState}) {
                if (!getState().order.deleteOrderDialog.isOpen) {
                    dispatch(actions.orders());
                }
            }
        ]
    }

}).use("fetch", adapterFetch(fetch))
    .use("options", function () {
        const h = {
            ...headers,
            'X-Auth-Token': localStorage.getItem('WWW-Token')
        };
        return {
            headers: h
        }
    });