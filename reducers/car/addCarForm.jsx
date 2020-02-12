import * as A from '../../actions/car/addCarForm';
import {API} from "../../rest/restAPI";
import * as auth from '../../actions/auth';
import {o2car} from '../../utils/models';
import {Stack} from 'immutable';

const defaultAddCarFormState = {
    isOpen: false,
    car: o2car({}),
    validations: Stack(),
    carModelsData: [],
    clientsData: []
};

export default function addCarForm(state = defaultAddCarFormState, action) {
    switch (action.type) {
        case A.OPEN_ADD_CAR_FORM:
            return {
                ...state,
                isOpen: true
            };
        case A.CLOSE_ADD_CAR_FORM:
            return defaultAddCarFormState;
        case A.UPDATE_ADD_CAR:
            return {
                ...state,
                car: state.car.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_ADD_CAR:
            const c = action.payload.fieldNames;
            const car = state.car;
            const v = c && c.length > 0 ? state.validations.filter((v) => {
                return c.indexOf(v.fieldName) === -1
            }).concat(car.validate(action.payload.fieldNames)) : car.validate(action.payload.fieldNames);

            return {
                ...state,
                car: car,
                validations: v
            };
        case API.events.addCar.actionSuccess:
            // TODO validation from server
            return defaultAddCarFormState;
        case API.events.addFormCarModels.actionSuccess:
            return {
                ...state,
                carModelsData: action.data
            };
        case API.events.addFormClients.actionSuccess:
            return {
                ...state,
                clientsData: action.data
            };
        case auth.LOGOUT_SUCCESS:
            return defaultAddCarFormState;
        default:
            return state;
    }
}