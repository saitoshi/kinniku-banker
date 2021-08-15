import React from "react";
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Grid, Header, Image } from 'semantic-ui-react';


function Home() {
  return (
      <div className="bg-home">
    <div className="center-screen">
      <Image src='https://saitoshi.github.io/images/profile.jpeg' centered size='medium' circular/>
      <Header as ='h1' textAlign='center'>Shin Saito</Header>
      <Header as ='h1' textAlign='center'>B.S. in Computer Science and Mathematics</Header>
      <Grid>
        <Grid.Column textAlign="center">
          <Button.Group centered>
            <Button color='instagram' size='small'>
              <Icon name='instagram'/>
            </Button>
            <Button color='linkedin' size='small'>
              <Icon name='linkedin'/>
            </Button>
            <Button color='github' size='small'>
              <Icon name='github'/>
            </Button>
          </Button.Group>
        </Grid.Column>
      </Grid>
    </div>
      </div>
  );
}
export default Home;
