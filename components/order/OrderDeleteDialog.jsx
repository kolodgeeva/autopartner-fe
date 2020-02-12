import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class OrderDeleteDialog extends Component {

    properties() {
        return this.props.properties;
    }

    actions() {
        return this.props.actions;
    }

    render() {
        const actions = [
            <FlatButton
                label="Отмена"
                primary={true}
                onClick={this.actions().close}
            />,
            <FlatButton
                label="Удалить"
                primary={true}
                keyboardFocused={true}
                onClick={() => {
                    this.actions().update('active', false);
                    this.actions().rest.delete();
                }}
            />
        ];

        return (
            <Dialog
                title="Удалить машину"
                actions={actions}
                modal={false}
                open={this.properties().isOpen}
                onRequestClose={this.actions().close}
            >
                Вы действительно хотите удалить заказ {this.properties().order['orderNumber']}?
            </Dialog>
        );
    }
}
