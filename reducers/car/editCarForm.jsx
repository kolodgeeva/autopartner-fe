import * as A from '../../actions/car/editCarForm';
import {API} from "../../rest/restAPI";
import * as auth from '../../actions/auth';
import {Stack} from 'immutable';
import {o2car} from '../../utils/models';

const defaultEditCarFormState = {
    isOpen: false,
    initialCar: o2car({}),
    car: o2car({}),
    validations: Stack(),
    carModelsData: [],
    clientsData: []
};

export default function editCarModelForm(state = defaultEditCarFormState, action) {
    switch (action.type) {
        case A.OPEN_EDIT_CAR_FORM:
            return {
                ...defaultEditCarFormState,
                initialCar: action.payload.car,
                car: action.payload.car,
                isOpen: true
            };
        case A.CLOSE_EDIT_CAR_FORM:
            return defaultEditCarFormState;
        case A.RESET_EDIT_CAR_FORM:
            return {
                ...defaultEditCarFormState,
                initialCar: state.initialCar,
                car: state.initialCar,
                isOpen: true
            };
        case A.UPDATE_EDIT_CAR:
            return {
                ...state,
                car: state.car.set(action.payload.fieldName, action.payload.value)
            };
        case A.VALIDATIONS_EDIT_CAR:
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
        case API.events.editCar.actionSuccess:
            // TODO validation from server
            return {
                ...state,
                isOpen: false
            };
        case API.events.editFormCarModels.actionSuccess:
            return {
                ...state,
                carModelsData: action.data
            };
        case API.events.editFormClients.actionSuccess:
            return {
                ...state,
                clientsData: action.data
            };
        case auth.LOGOUT_SUCCESS:
            return defaultEditCarFormState;
        default:
            return state;
    }
}