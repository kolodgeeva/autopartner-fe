import * as V from './validation';
import {Record} from 'immutable';
import {
    clientRequiredFieldList,
    carBrandRequiredFieldList,
    carTypeRequiredFieldList,
    carModelRequiredFieldList,
    carRequiredFieldList,
    taskTypeRequiredFieldList,
    taskRequiredFieldList,
    materialTypeRequiredFieldList,
    materialRequiredFieldList,
    orderRequiredFieldList
} from '../constants/constants';

const UserT = Record({
    id: -1,
    firstName: undefined,
    lastName: undefined
});

class User extends UserT {
    constructor(f) {
        const nf = {
            id: f.id ? parseInt(f.id) : -1,
            firstName: f.firstName,
            lastName: f.lastName
        };
        super(nf)
    }

    toString() {
        return `${this.firstName} ${this.lastName}`
    }

    isEqual(that) {
        return that && (that instanceof User && this.id === that.id)
    }
}

const ClientT = Record({
    id: null,
    firstName: undefined,
    lastName: undefined,
    companyName: undefined,
    address: undefined,
    phone: undefined,
    email: undefined,
    discountService: 0,
    discountMaterial: 0,
    type: "PERSON",
    note: undefined,
    active: true
});

class Client extends ClientT {
    constructor(o) {
        const no = {
            id: o.id ? parseInt(o.id) : null,
            firstName: o.firstName,
            lastName: o.lastName,
            companyName: o.companyName,
            address: o.address,
            phone: o.phone,
            email: o.email,
            discountService: o.discountService,
            discountMaterial: o.discountMaterial,
            type: o.type ? o.type : "PERSON",
            note: o.note,
            active: o.active ? o.active : true
        };
        super(no);
    }

    toString() {
        return `${this.id} ${this.firstName} ${this.lastName} ${this.companyName} ${this.address} ${this.phone} 
                ${this.email} ${this.discountService} ${this.discountMaterial} ${this.type} ${this.note} ${this.active}`
    }

    isEqual(that) {
        return that && (that instanceof Client && this.id === that.id)
    }

    toObject() {
        let ret = {};
        this.toMap().forEach((v, k) => {
            ret[k] = v
        });
        return ret
    }

    toJSON() {
        return JSON.stringify(this.toObject())
    }

    validate(fieldNames) {
        const rules = clientRequiredFieldList
            .map((fn) => {
                return V.required(fn, this[fn])
            });

        const rl = (fieldNames && fieldNames.length > 0) ? rules
            .filter((v) => {
                return !fieldNames || fieldNames.indexOf(v.fieldName) > -1
            }) : rules;

        return rl
            .map((v) => {
                return v.validate()
            })
            .filter((vr) => {
                return vr !== undefined
            })
    }
}

const CarTypeT = Record({
    id: null,
    name: undefined,
    active: true
});

class CarType extends CarTypeT {
    constructor(o) {
        const no = {
            id: o.id ? parseInt(o.id) : null,
            name: o.name,
            active: o.active ? o.active : true
        };
        super(no);
    }

    toString() {
        return `${this.id} ${this.name} ${this.active}`
    }

    isEqual(that) {
        return that && (that instanceof CarType && this.id === that.id)
    }

    toObject() {
        let ret = {};
        this.toMap().forEach((v, k) => {
            ret[k] = v
        });
        return ret
    }

    toJSON() {
        return JSON.stringify(this.toObject())
    }

    validate(fieldNames) {
        const rules = carTypeRequiredFieldList
            .map((fn) => {
                return V.required(fn, this[fn])
            });

        const rl = (fieldNames && fieldNames.length > 0) ? rules
            .filter((v) => {
                return !fieldNames || fieldNames.indexOf(v.fieldName) > -1
            }) : rules;

        return rl
            .map((v) => {
                return v.validate()
            })
            .filter((vr) => {
                return vr !== undefined
            })
    }
}

const CarBrandT = Record({
    id: null,
    name: undefined,
    carType: null,
    active: true
});

class CarBrand extends CarBrandT {
    constructor(o) {
        const no = {
            id: o.id ? parseInt(o.id) : null,
            name: o.name,
            carType: o.carType,
            active: o.active ? o.active : true
        };
        super(no);
    }

    toString() {
        return `${this.id} ${this.name} ${this.carType} ${this.active}`
    }

    isEqual(that) {
        return that && (that instanceof CarBrand && this.id === that.id)
    }

    toObject() {
        let ret = {};
        this.toMap().forEach((v, k) => {
            ret[k] = v
        });
        return ret
    }

    toJSON() {
        return JSON.stringify(this.toObject())
    }

    validate(fieldNames) {
        const rules = carBrandRequiredFieldList
            .map((fn) => {
                return V.required(fn, this[fn])
            });

        const rl = (fieldNames && fieldNames.length > 0) ? rules
            .filter((v) => {
                return !fieldNames || fieldNames.indexOf(v.fieldName) > -1
            }) : rules;

        return rl
            .map((v) => {
                return v.validate()
            })
            .filter((vr) => {
                return vr !== undefined
            })
    }
}

const CarModelT = Record({
    id: null,
    name: undefined,
    carBrand: null,
    active: true
});

class CarModel extends CarModelT {
    constructor(o) {
        const no = {
            id: o.id ? parseInt(o.id) : null,
            name: o.name,
            carBrand: o.carBrand,
            active: o.active ? o.active : true
        };
        super(no);
    }

    toString() {
        return `${this.id} ${this.name} ${this.carBrand} ${this.active}`
    }

    isEqual(that) {
        return that && (that instanceof CarModel && this.id === that.id)
    }

    toObject() {
        let ret = {};
        this.toMap().forEach((v, k) => {
            ret[k] = v
        });
        return ret
    }

    toJSON() {
        return JSON.stringify(this.toObject())
    }

    validate(fieldNames) {
        const rules = carModelRequiredFieldList
            .map((fn) => {
                return V.required(fn, this[fn])
            });

        const rl = (fieldNames && fieldNames.length > 0) ? rules
            .filter((v) => {
                return !fieldNames || fieldNames.indexOf(v.fieldName) > -1
            }) : rules;

        return rl
            .map((v) => {
                return v.validate()
            })
            .filter((vr) => {
                return vr !== undefined
            })
    }
}

const CarT = Record({
    id: null,
    carModel: null,
    client: null,
    regNumber: null,
    vinCode: null,
    mileage: null,
    notes: null,
    active: true
});

class Car extends CarT {
    constructor(o) {
        const no = {
            id: o.id ? parseInt(o.id) : null,
            carModel: o.carModel,
            client: o.client,
            regNumber: o.regNumber,
            vinCode: o.vinCode,
            mileage: o.mileage,
            notes: o.notes,
            active: o.active ? o.active : true
        };
        super(no);
    }

    toString() {
        return `${this.id} ${this.carModel} ${this.client} ${this.regNumber} ${this.vinCode} ${this.mileage} ${this.notes} ${this.active}`
    }

    isEqual(that) {
        return that && (that instanceof Car && this.id === that.id)
    }

    toObject() {
        let ret = {};
        this.toMap().forEach((v, k) => {
            ret[k] = v
        });
        return ret
    }

    toJSON() {
        return JSON.stringify(this.toObject())
    }

    validate(fieldNames) {
        const rules = carRequiredFieldList
            .map((fn) => {
                return V.required(fn, this[fn])
            });

        const rl = (fieldNames && fieldNames.length > 0) ? rules
            .filter((v) => {
                return !fieldNames || fieldNames.indexOf(v.fieldName) > -1
            }) : rules;

        return rl
            .map((v) => {
                return v.validate()
            })
            .filter((vr) => {
                return vr !== undefined
            })
    }
}

const TaskTypeT = Record({
    id: null,
    name: undefined,
    active: true
});

class TaskType extends TaskTypeT {
    constructor(o) {
        const no = {
            id: o.id ? parseInt(o.id) : null,
            name: o.name,
            active: o.active ? o.active : true
        };
        super(no);
    }

    toString() {
        return `${this.id} ${this.name} ${this.active}`
    }

    isEqual(that) {
        return that && (that instanceof TaskType && this.id === that.id)
    }

    toObject() {
        let ret = {};
        this.toMap().forEach((v, k) => {
            ret[k] = v
        });
        return ret
    }

    toJSON() {
        return JSON.stringify(this.toObject())
    }

    validate(fieldNames) {
        const rules = taskTypeRequiredFieldList
            .map((fn) => {
                return V.required(fn, this[fn])
            });

        const rl = (fieldNames && fieldNames.length > 0) ? rules
            .filter((v) => {
                return !fieldNames || fieldNames.indexOf(v.fieldName) > -1
            }) : rules;

        return rl
            .map((v) => {
                return v.validate()
            })
            .filter((vr) => {
                return vr !== undefined
            })
    }
}

const TaskT = Record({
    id: null,
    name: undefined,
    taskType: null,
    active: true
});

class Task extends TaskT {
    constructor(o) {
        const no = {
            id: o.id ? parseInt(o.id) : null,
            name: o.name,
            taskType: o.taskType,
            active: o.active ? o.active : true
        };
        super(no);
    }

    toString() {
        return `${this.id} ${this.name} ${this.taskType} ${this.active}`
    }

    isEqual(that) {
        return that && (that instanceof Task && this.id === that.id)
    }

    toObject() {
        let ret = {};
        this.toMap().forEach((v, k) => {
            ret[k] = v
        });
        return ret
    }

    toJSON() {
        return JSON.stringify(this.toObject())
    }

    validate(fieldNames) {
        const rules = taskRequiredFieldList
            .map((fn) => {
                return V.required(fn, this[fn])
            });

        const rl = (fieldNames && fieldNames.length > 0) ? rules
            .filter((v) => {
                return !fieldNames || fieldNames.indexOf(v.fieldName) > -1
            }) : rules;

        return rl
            .map((v) => {
                return v.validate()
            })
            .filter((vr) => {
                return vr !== undefined
            })
    }
}

const MaterialTypeT = Record({
    id: null,
    name: undefined,
    active: true
});

class MaterialType extends MaterialTypeT {
    constructor(o) {
        const no = {
            id: o.id ? parseInt(o.id) : null,
            name: o.name,
            active: o.active ? o.active : true
        };
        super(no);
    }

    toString() {
        return `${this.id} ${this.name} ${this.active}`
    }

    isEqual(that) {
        return that && (that instanceof MaterialType && this.id === that.id)
    }

    toObject() {
        let ret = {};
        this.toMap().forEach((v, k) => {
            ret[k] = v
        });
        return ret
    }

    toJSON() {
        return JSON.stringify(this.toObject())
    }

    validate(fieldNames) {
        const rules = materialTypeRequiredFieldList
            .map((fn) => {
                return V.required(fn, this[fn])
            });

        const rl = (fieldNames && fieldNames.length > 0) ? rules
            .filter((v) => {
                return !fieldNames || fieldNames.indexOf(v.fieldName) > -1
            }) : rules;

        return rl
            .map((v) => {
                return v.validate()
            })
            .filter((vr) => {
                return vr !== undefined
            })
    }
}

const MaterialT = Record({
    id: null,
    name: undefined,
    materialType: null,
    active: true
});

class Material extends MaterialT {
    constructor(o) {
        const no = {
            id: o.id ? parseInt(o.id) : null,
            name: o.name,
            materialType: o.materialType,
            active: o.active ? o.active : true
        };
        super(no);
    }

    toString() {
        return `${this.id} ${this.name} ${this.materialType} ${this.active}`
    }

    isEqual(that) {
        return that && (that instanceof Material && this.id === that.id)
    }

    toObject() {
        let ret = {};
        this.toMap().forEach((v, k) => {
            ret[k] = v
        });
        return ret
    }

    toJSON() {
        return JSON.stringify(this.toObject())
    }

    validate(fieldNames) {
        const rules = materialRequiredFieldList
            .map((fn) => {
                return V.required(fn, this[fn])
            });

        const rl = (fieldNames && fieldNames.length > 0) ? rules
            .filter((v) => {
                return !fieldNames || fieldNames.indexOf(v.fieldName) > -1
            }) : rules;

        return rl
            .map((v) => {
                return v.validate()
            })
            .filter((vr) => {
                return vr !== undefined
            })
    }
}

const OrderT = Record({
    id: -1,
    orderNumber: undefined,
    car: undefined,
    mileage: undefined,
    paymentType: undefined,
    status: undefined,
    note: undefined,
    active: true
});

class Order extends OrderT {
    constructor(o) {
        const m = {
            id: o.id ? parseInt(o.id) : null,
            orderNumber: o.orderNumber,
            car: o.car,
            mileage: o.mileage,
            paymentType: o.paymentType,
            status: o.status,
            note: o.note,
            active: o.active ? o.active : true
        };
        super(m)
    }

    isEqual(that) {
        return that && (that instanceof Order && this.id === that.id)
    }

    toObject() {
        let ret = {};
        this.toMap().forEach((v, k) => {
            ret[k] = v
        });
        return ret
    }

    toJSON() {
        return JSON.stringify(this.toObject())
    }

    validate(fieldNames) {
        const rules = orderRequiredFieldList
            .map((fn) => {
                return V.required(fn, this[fn])
            });

        const rl = (fieldNames && fieldNames.length > 0) ? rules
            .filter((v) => {
                return !fieldNames || fieldNames.indexOf(v.fieldName) > -1
            }) : rules;

        return rl
            .map((v) => {
                return v.validate()
            })
            .filter((vr) => {
                return vr !== undefined
            })
    }

}

export function o2u(o) {
    return o ? new User(o) : o
}

export function o2o(o) {
    return o ? new Order(o) : o
}

export function o2c(o) {
    return o ? new Client(o) : o
}

export function o2ct(o) {
    return o ? new CarType(o) : o
}

export function o2cb(o) {
    return o ? new CarBrand(o) : o
}

export function o2cm(o) {
    return o ? new CarModel(o) : o
}

export function o2car(o) {
    return o ? new Car(o) : o
}

export function o2tt(o) {
    return o ? new TaskType(o) : o
}

export function o2task(o) {
    return o ? new Task(o) : o
}

export function o2material(o) {
    return o ? new Material(o) : o
}

export function o2order(o) {
    return o ? new Order(o) : o
}
