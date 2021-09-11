import React from "react";
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import SideNavBar from './SideNavBar';
import { Header, Container } from 'semantic-ui-react';

class Muscle extends React.Component {
  render() {
    return (
        <div>
          <SideNavBar/>
          <Container>
            <Header as='h1' textAlign='centered'>筋トレ日記</Header>

          </Container>
        </div>
    )
  }
}
export default Muscle();
