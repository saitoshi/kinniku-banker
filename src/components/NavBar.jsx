import React from "react";
import './style.css';
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Sticky } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function NavBar(props) {
  return (
        <Menu size = 'huge' inverted color = 'teal' vertical>
          <Menu.Item>WHO IS HIRO?</Menu.Item>
        </Menu>
  );
}
export default withRouter(NavBar);
