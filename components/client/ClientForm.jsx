import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    FlatButton,
    Dialog,
    TextField,
    SelectField,
    MenuItem
} from 'material-ui';
import {clientFieldsMap, clientRequiredFieldList} from '../../constants/constants';
import * as V from '../../utils/validation';

class ClientForm extends Component {

    properties() {
        return this.props.properties;
    }

    actions() {
        return this.props.actions;
    }

    getValidations = (fieldName) => {
        return this.properties().validations.filter((v) => {
            return v.fieldName === fieldName
        })
    };

    focus(fieldName) {
        const f = this[fieldName];
        f ? f.focus() : f
    }

    number(fieldName, validateFields, focusField) {
        const filtered = this.getValidations(fieldName);
        const info = clientFieldsMap.get(fieldName);
        const mc = V.getMainColor(filtered);
        const hintText = "0";
        return (
            <TextField
                ref={(ref) => this[fieldName] = ref}
                hintText={hintText}
                floatingLabelFixed={true}
                floatingLabelText={info.title}
                onChange={(e) => {
                    const v = e.target.value.substr(0, 8);
                    this.actions().update(fieldName, v)
                }}
                onBlur={(e) => this.actions().validate(validateFields)}
                onKeyDown={((e) => {
                    if (e.keyCode === 13)
                         this.focus(focusField)
                })}
                value={this.properties().client[fieldName]}
                errorText={V.errorText(filtered)}
                errorStyle={mc}
                floatingLabelStyle={mc}
                hintStyle={V.getSecondaryColor(filtered)}
            />
        )
    }

    text(fieldName, validateFields, focusField) {
        const filtered = this.getValidations(fieldName);
        const info = clientFieldsMap.get(fieldName);
        const mc = V.getMainColor(filtered);
        const hintText = "";
        return (
            <TextField
                ref={(ref) => this[fieldName] = ref}
                hintText={hintText}
                floatingLabelFixed={true}
                floatingLabelText={info.title}
                onChange={(e) => {
                    const v = e.target.value;
                    this.actions().update(fieldName, v)
                }}
                onBlur={(e) => this.actions().validate(validateFields)}
                onKeyDown={((e) => {
                    if (e.keyCode === 13)
                        this.focus(focusField)
                })}
                value={this.properties().client[fieldName]}
                errorText={V.errorText(filtered)}
                errorStyle={mc}
                floatingLabelStyle={mc}
                multiLine={true}
                hintStyle={V.getSecondaryColor(filtered)}
            />
        )
    }

    selector(fieldName, items) {
        const filtered = this.getValidations(fieldName);
        const info = clientFieldsMap.get(fieldName);
        const mc = V.getMainColor(filtered);
        return (
            <SelectField
                ref={(ref) => this[fieldName] = ref}
                floatingLabelFixed={true}
                floatingLabelText={info.title}
                floatingLabelStyle={mc}
                onChange={(event, index, value) => {
                    this.actions().update(fieldName, value)
                }}
                value={this.properties().client[fieldName]}>
                {items.map(el => {
                    return <MenuItem value={el.id} key={el.id} primaryText={el.name} />;
                })}
            </SelectField>
        )
    }

    render() {
        const actions = [
            <div>
                <FlatButton
                    label="Сохранить"
                    primary={true}
                    keyboardFocused={true}
                    onClick={() => {
                        this.actions().validate(clientRequiredFieldList.toArray());
                        if(!this.properties().validations.find((v) => {return v.level === 'error'}))
                            this.actions().rest.push();
                    }}
                />
            </div>
        ];

        return (
            <Dialog
                title={this.props.title}
                actions={actions}
                open={this.properties().isOpen}
                autoDetectWindowHeight={true}
                onRequestClose={this.actions().close}
                autoScrollBodyContent={true}>
                <div>
                    {this.selector("type", [{id: "PERSON", name: "Частное лицо"}, {id: "LEGAL", name: "Компания"}])}<br/>
                    {this.text("firstName", ["firstName"], "firstName")}<br/>
                    {this.text("lastName", ["lastName"], "lastName")}<br/>
                    {this.text("companyName", ["companyName"], "companyName")}<br/>
                    {this.text("address", ["address"], "address")}<br/>
                    {this.text("phone", ["phone"], "phone")}<br/>
                    {this.text("email", ["email"], "email")}<br/>
                    {this.number("discountService", ["discountService"], "discountService")}<br/>
                    {this.number("discountMaterial", ["discountMaterial"], "discountMaterial")}<br/>
                    {this.text("note", ["note"], "note")}
                </div>
            </Dialog>
        );
    }
}

ClientForm.propTypes = {
    title: PropTypes.string.isRequired,
    properties: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default ClientForm;
