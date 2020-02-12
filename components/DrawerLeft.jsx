import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {
  NavLink,
} from 'react-router-dom';

const linkStyle = {
  'text-decoration': 'none',
  color: 'black',
};

export default class DrawerLeft extends React.Component {
  close() {
    this.props.onToggleDrawer();
  }

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.props.open}
          onRequestChange={this.props.onToggleDrawer}
        >
          <AppBar
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            onClick={this.props.onToggleDrawer.bind(this)}
          />

          <MenuItem onClick={() => this.close()}>
            <NavLink style={linkStyle} to="/client">Клиенты</NavLink>
          </MenuItem>
          <MenuItem onClick={() => this.close()}>
            <NavLink style={linkStyle} to="/car">Машины</NavLink>
          </MenuItem>
          <MenuItem onClick={() => this.close()}>
            <NavLink style={linkStyle} to="/order">Заказы</NavLink>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => this.close()}>
            <NavLink style={linkStyle} to="/carType">Типы Авто</NavLink>
          </MenuItem>
          <MenuItem onClick={() => this.close()}>
            <NavLink style={linkStyle} to="/carBrand">Бренды Авто</NavLink>
          </MenuItem>
          <MenuItem onClick={() => this.close()}>
            <NavLink style={linkStyle} to="/carModel">Модели Авто</NavLink>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => this.close()}>
            <NavLink style={linkStyle} to="/materialType">Типы материалов</NavLink>
          </MenuItem>
          <MenuItem onClick={() => this.close()}>
            <NavLink style={linkStyle} to="/material">Материалы</NavLink>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => this.close()}>
            <NavLink style={linkStyle} to="/taskType">Типы работ</NavLink>
          </MenuItem>
          <MenuItem onClick={() => this.close()}>
            <NavLink style={linkStyle} to="/task">Работы</NavLink>
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}
