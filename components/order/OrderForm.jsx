import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    FlatButton,
    RaisedButton,
    Dialog,
    TextField,
    AutoComplete,
    Step,
    Stepper,
    StepLabel
} from 'material-ui';
import MaterialTableDemo from './table/MaterialTableDemo';
import {orderFieldsMap, orderRequiredFieldList} from '../../constants/constants';
import * as V from '../../utils/validation';
import * as H from '../../utils/helpers';

class orderForm extends Component {

    properties() {
        return this.props.properties;
    }

    actions() {
        return this.props.actions;
    }

    state = {
        finished: false,
        stepIndex: 0
    };

    headers = [
        {value: 'Name', type: 'TextField', width: 200},
        {value: 'Address', type: 'TextField', width: 200},
        {value: 'Phone', type: 'TextField', width: 200},
        {value: 'Date', type: 'DatePicker', width: 200},
        {value: 'Enabled', type: 'Toggle', width: 50},
        {value: 'Last Edited By', type: 'ReadOnly', width: 100}
    ];

    onChange = (row) => {
        console.log(row)
    };

    onDelete = (e) => {
        console.log(e)
    };

    rows = [];

    handleNext = () => {
        const {stepIndex} = this.state;

        if (stepIndex >= 2) {
            this.actions().validate(orderRequiredFieldList.toArray());
            if (!this.properties().validations.find((v) => {
                    return v.level === 'error'
                }))
                this.actions().rest.push();
        }

        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        {this.autocomplete("car", ["car"], "Машина",
                        () => {return this.properties().carsData},
                        H.car2str,
                        (s) => this.actions().rest.cars())}<br/>
                        {this.text("orderNumber", ["orderNumber"], "orderNumber")}<br/>
                        {this.text("mileage", ["mileage"], "mileage")}<br/>
                        {this.text("paymentType", ["paymentType"], "paymentType")}<br/>
                        {this.text("status", ["status"], "status")}<br/>
                        {this.text("note", ["note"], "note")}<br/>
                    </div>
                );
            case 1:
                return (
                    <MaterialTableDemo/>
                );
            case 2:
                return 'Таблица материалов';
        }
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

    text(fieldName, validateFields, focusField) {
        const filtered = this.getValidations(fieldName);
        const info = orderFieldsMap.get(fieldName);
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
                value={this.properties().order[fieldName]}
                errorText={V.errorText(filtered)}
                errorStyle={mc}
                floatingLabelStyle={mc}
                multiLine={true}
                hintStyle={V.getSecondaryColor(filtered)}
            />
        )
    }

    autocomplete(fieldName, validateFields, hintText, data, toString, rest) {
        const filtered = this.getValidations(fieldName);
        const mc = V.getMainColor(filtered);

        return (
            <AutoComplete
                ref={(ref) => this[fieldName] = ref}
                floatingLabelFixed={true}
                floatingLabelText={hintText}
                filter={AutoComplete.noFilter}
                dataSource={data().map((r) => H.autoCompleteItem(toString, r))}
                openOnFocus={true}
                searchText={toString(this.properties().order[fieldName])}
                onFocus={() => rest()}
                onUpdateInput={(s) =>  {
                    if(s === '')
                        this.actions().update(fieldName, undefined);
                    rest(s)
                }}
                onNewRequest={(choose, i) => {
                    if(choose.row) {
                        this.actions().update(fieldName, choose.row);
                    }
                }}
                onBlur={((e) => {
                    this.actions().validate(validateFields);
                }).bind(this)}
                errorText={V.errorText(filtered)}
                errorStyle={mc}
                floatingLabelStyle={mc}
                hintStyle={V.getSecondaryColor(filtered)}
            />
        )
    }

    render() {

        const {finished, stepIndex} = this.state;

        const actions = [
            <div>
                <FlatButton
                    label="Назад"
                    disabled={stepIndex === 0}
                    onClick={this.handlePrev}
                    style={{marginRight: 12}}
                />
                <RaisedButton
                    label={stepIndex === 2 ? 'Сохранить' : 'Далее'}
                    primary={true}
                    onClick={this.handleNext}
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
                    <Stepper activeStep={stepIndex}>
                        <Step>
                            <StepLabel>Данные заказа</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Работы</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Материалы</StepLabel>
                        </Step>
                    </Stepper>

                    {this.getStepContent(stepIndex)}
                </div>
            </Dialog>
        );
    }
}

orderForm.propTypes = {
    title: PropTypes.string.isRequired,
    properties: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default orderForm;
