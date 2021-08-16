import React from "react";
import './style.css';
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Sticky, Sidebar } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class NavBar extends  React.Component {
  state = {
    visible: false,
    visible2: false,
  }

  handleShowClick = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  }

  handleShowClick2 = () => {
    this.setState((prevState) => ({
      visible2: !prevState.visible2,
    }));
  }

  render() {
    const { visible } = this.state;
    return (
        <div>
          <Sidebar as = {Menu}
                   animation = 'push'
                   direction = 'left'
                   icon = 'labeled'
                   inverted
                   vertical
                   visible = {visible}
                   width='thin'
                   color='teal'
                   style={{ height: '100vh', minHeight: '100vh' }}
                   >
            <Menu.Item style={{ floated: 'left', width: '100%' }} >WHO IS HIRO?</Menu.Item>
          </Sidebar>

        </div>
    );
  }
}
export default withRouter(NavBar);
