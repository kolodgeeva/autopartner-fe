import React, {Component, PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class TaskDeleteDialog extends Component {

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
                title="Удалить работу"
                actions={actions}
                modal={false}
                open={this.properties().isOpen}
                onRequestClose={this.actions().close}
            >
                Вы действительно хотите удалить работу {this.properties().task['name']}?
            </Dialog>
        );
    }
}
