import {ListItem} from 'material-ui';
import {palette} from '../src/material_ui_raw_theme_file';
import {Record} from 'immutable';

const ValidationResultT = new Record({
    fieldName: undefined,
    level: undefined,
    description: undefined
});

class ValidationResult extends ValidationResultT {
    constructor(fieldName, level, description) {
        super({
            fieldName: fieldName,
            level: level,
            description: description
        })
    }

    toString() {
        return `${this.description}`
    }

    key() {
        return `${this.fieldName}-${this.level}-${this.description.replace(" ", "-")}`
    }

    toNode() {
        switch (this.level) {  
            case 'error':
                return (<div key={this.key()} style={{color: palette.error1Color}}>{this.toString()}</div>);
            case 'warn':
                return (<div key={this.key()} style={{color: palette.warn1Color}}>{this.toString()}</div>);
            case 'info':
                return (<div key={this.key()} style={{color: palette.info1Color}}>{this.toString()}</div>);
            default:
                return undefined;
        }
    }
}

const ValidationT = new Record({
    fieldName: undefined,
    validationFunction: undefined,
    level: undefined,
    description: undefined
});

class Validation extends ValidationT {
    constructor(fieldName, validationFunction, level, description) {
        super({
            fieldName: fieldName,
            validationFunction: validationFunction,
            level: level,
            description: description
        })
    }

    validate() {
        return (this.validationFunction()) ? new ValidationResult(this.fieldName, this.level, this.description) : undefined;
    }
}

export function required(fieldName, value) {
    const vf = () => {
        return typeof value === 'undefined' || value.toString() === ""
    };

    return new Validation(fieldName, vf, 'error', 'Обязательное поле');
}

export function minLength(fieldName, value, minLength) {
    const vf = () => {
        return value && value.length <= minLength
    };

    return new Validation(fieldName, vf, 'error', `Field length must be longer than ${minLength}`);
}

export function maxLength(fieldName, value, maxLength) {
    const vf = () => {
        return value && value.length >= maxLength
    };

    return new Validation(fieldName, vf, 'error', `Field length must be shorter than ${maxLength}`);
}

export function less(fieldName, thisValue, thatValue, level, description) {
    const vf = () => {
        return thisValue && thatValue && thisValue > thatValue
    };

    return new Validation(fieldName, vf,
        level ? level : 'error',
        description ? description : `Value must be less than ${thatValue}`);
}

export function greater(fieldName, thisValue, thatValue, level, description) {
    const vf = () => {
        return thisValue && thatValue && thisValue <= thatValue
    };

    return new Validation(fieldName, vf,
        level ? level : 'error',
        description ? description : `Value must be less greater ${thatValue}`);
}

export function lessOrEqual(fieldName, thisValue, thatValue, level, description) {
    const vf = () => {
        return thisValue && thatValue && thisValue > thatValue
    };

    return new Validation(fieldName, vf,
        level ? level : 'error',
        description ? description : `Value must be less or equal than ${thatValue}`);
}

export function greaterOrEqual(fieldName, thisValue, thatValue, level, description) {
    const vf = () => {
        return thisValue && thatValue && thisValue < thatValue
    };

    return new Validation(fieldName, vf,
        level ? level : 'error',
        description ? description : `Value must be less greater or equal ${thatValue}`);
}

export function equal(fieldName, thisValue, thatValue, level, description) {
    const vf = () => {
        if(thisValue && thatValue) {
            if(typeof thisValue === 'object')
                return !thisValue.isEqual(thatValue);
            else
                return thisValue !== thatValue;
        }
        return false;
    };

    return new Validation(fieldName, vf,
        level ? level : 'error',
        description ? description : `Value must be equal ${thatValue}`);
}

export function notEqual(fieldName, thisValue, thatValue, level, description) {
    const vf = () => {
        if(thisValue && thatValue) {
            if(typeof thisValue === 'object')
                return thisValue.isEqual(thatValue);
            else
                return thisValue === thatValue;
        }
        return false;
    };

    return new Validation(fieldName, vf,
        level ? level : 'error',
        description ? description : `Value must not be equal ${thatValue}`);
}

export function errorText(validations) {
    if (validations && validations.size !== 0)
        return <div>{
            validations.map((v) => {
                return v.toNode()
            })
        }</div>;
    else
        return ""
}

export function getMainColor(validations) {
    if(validations.size !== 0) {
        let color;

        if (validations.find((v) => {
                return v.level === 'error'
            }))
            color = palette.error1Color;
        else if (validations.find((v) => {
                return v.level === 'warn'
            }))
            color = palette.warn1Color;
        else if (validations.find((v) => {
                return v.level === 'info'
            }))
            color = palette.info1Color;

        return color ? {
            color: color
        } : {}
    }
    return {}
}

export function getSecondaryColor(validations) {
    if(validations.size !== 0) {
        let color;
        if (validations.find((v) => {
                return v.level === 'error'
            }))
            color = palette.error2Color;
        else if (validations.find((v) => {
                return v.level === 'warn'
            }))
            color = palette.warn2Color;
        else if (validations.find((v) => {
                return v.level === 'info'
            }))
            color = palette.info2Color;

        return color ? {
            color: color
        } : {}
    }
    return {}
}

export function error(level, description) {
    return new ValidationResult('', level, description)
}