import {Map, Stack} from 'immutable';
import React from 'react';

export const host = "http://localhost:8888/";

export const clientFieldsMap = Map(
    {
        "firstName": {
            title: "Имя",
            description: <div>Введите имя клиента, это обязательное поле</div>
        },
        "lastName": {
            title: "Фамилия",
            description: <div>Введите фамилию клиента, это обязательное поле</div>
        },
        "companyName": {
            title: "Компания",
            description: <div>Это обязательное поле</div>
        },
        "address": {
            title: "Адрес",
            description: <div></div>
        },
        "phone": {
            title: "Телефон",
            description: <div>Это обязательное поле</div>
        },
        "email": {
            title: "E-mail",
            description: <div></div>
        },
        "discountService": {
            title: "Скидка (работы)",
            description: <div></div>
        },
        "discountMaterial": {
            title: "Скидка (материалы)",
            description: <div></div>
        },
        "type": {
            title: "Тип",
            description: <div>Это обязательное поле</div>
        },
        "note": {
            title: "Примечание",
            description: <div></div>
        }
    }
);

export const clientRequiredFieldList = Stack(['firstName', 'type']);

export const clientFieldList = Stack(['firstName', 'lastName', 'companyName', 'address', 'phone', 'email', 'discountService', 'discountMaterial', 'type', 'note']);

export const carTypeFieldsMap = Map(
    {
        "name": {
            title: "Тип",
            description: <div></div>
        }
    }
);

export const carTypeRequiredFieldList = Stack(['name']);

export const carBrandFieldsMap = Map(
    {
        "name": {
            title: "Марка",
            description: <div></div>
        },
        "carType": {
            title: "Тип",
            description: <div></div>
        }
    }
);

export const carBrandRequiredFieldList = Stack(['name', 'carType']);

export const carModelFieldsMap = Map(
    {
        "name": {
            title: "Модель",
            description: <div></div>
        },
        "carBrand": {
            title: "Марка",
            description: <div></div>
        }
    }
);

export const carModelRequiredFieldList = Stack(['name', 'carBrand']);

export const carFieldsMap = Map(
    {
        "client": {
            title: "Клиент",
            description: <div></div>
        },
        "carModel": {
            title: "Модель",
            description: <div></div>
        },
        "regNumber": {
            title: "Гос. номер",
            description: <div></div>
        },
        "vinCode": {
            title: "Vin код",
            description: <div></div>
        },
        "mileage": {
            title: "Пробег",
            description: <div></div>
        },
        "notes": {
            title: "Заметки",
            description: <div></div>
        }
    }
);

export const carRequiredFieldList = Stack(['client', 'carModel', 'regNumber', 'vinCode', 'mileage', 'notes']);

export const taskTypeFieldsMap = Map(
    {
        "name": {
            title: "Тип",
            description: <div></div>
        }
    }
);

export const taskTypeRequiredFieldList = Stack(['name']);

export const taskFieldsMap = Map(
    {
        "name": {
            title: "Название",
            description: <div></div>
        },
        "taskType": {
            title: "Тип",
            description: <div></div>
        }
    }
);

export const taskRequiredFieldList = Stack(['name', 'taskType']);

export const materialTypeFieldsMap = Map(
    {
        "name": {
            title: "Тип",
            description: <div></div>
        }
    }
);

export const materialTypeRequiredFieldList = Stack(['name']);

export const materialFieldsMap = Map(
    {
        "name": {
            title: "Название",
            description: <div></div>
        },
        "materialType": {
            title: "Тип",
            description: <div></div>
        }
    }
);

export const materialRequiredFieldList = Stack(['name', 'materialType']);

export const orderRequiredFieldList = Stack(['orderNumber', 'car', 'mileage', 'paymentType', 'status', 'note']);

export const orderFieldsMap = Map(
    {
        "orderNumber": {
            title: "Номер заказа",
            description: <div></div>
        },
        "car": {
            title: "Машина",
            description: <div></div>
        },
        "mileage": {
            title: "Пробег",
            description: <div></div>
        },
        "paymentType": {
            title: "Тип оплаты",
            description: <div></div>
        },
        "status": {
            title: "Статус",
            description: <div></div>
        },
        "note": {
            title: "Примечание",
            description: <div></div>
        }
    }
);

