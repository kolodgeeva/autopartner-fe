import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    FlatButton,
    Dialog,
    TextField,
    SelectField,
    AutoComplete,
    MenuItem
} from 'material-ui';
import {carModelFieldsMap, carModelRequiredFieldList} from '../../../constants/constants';
import * as V from '../../../utils/validation';
import * as H from '../../../utils/helpers';

class carModelForm extends Component {

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

    text(fieldName, validateFields, focusField) {
        const filtered = this.getValidations(fieldName);
        const info = carModelFieldsMap.get(fieldName);
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
                value={this.properties().carModel[fieldName]}
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
                searchText={toString(this.properties().carModel[fieldName])}
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
        const actions = [
            <div>
                <FlatButton
                    label="Сохранить"
                    primary={true}
                    keyboardFocused={true}
                    onClick={() => {
                        this.actions().validate(carModelRequiredFieldList.toArray());
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
                    {this.autocomplete("carBrand", ["carBrand"], "Марка",
                        () => {return this.properties().carBrandsData},
                        H.carBrand2str,
                        (s) => this.actions().rest.carBrands())}<br/>
                    {this.text("name", ["name"], "name")}<br/>
                </div>
            </Dialog>
        );
    }
}

carModelForm.propTypes = {
    title: PropTypes.string.isRequired,
    properties: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default carModelForm;
