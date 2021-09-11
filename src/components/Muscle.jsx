import React from "react";
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import SideNavBar from './SideNavBar';
import { Header, Container, Card } from 'semantic-ui-react';

class Muscle extends React.Component {
  render() {
    return (
        <div>
          <SideNavBar/>
          <Container>
            <Header as='h1' textAlign='centered'>筋トレ日記</Header>
            <Card.Group itemsPerRow = {4}>
              <Card>
              </Card>
            </Card.Group>
          </Container>
        </div>
    )
  }
}
export default Muscle;
