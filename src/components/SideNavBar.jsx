import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Button, Icon, IconGroup, Sidebar, Label } from 'semantic-ui-react';

class SideNavBar extends React.Component {
  state = {
    visible: false,
    visible2: false
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
          <Button style={{ position: 'fixed', zIndex: 1, top: 0, height: '100vh', borderRadius: 0 }} attached={'right'} icon color='grey' disabled={false} onClick={this.handleShowClick}>
            <Icon name='bars'/>
          </Button>
          <Sidebar
              as={Menu}
              animation='push'
              direction='left'
              icon='labeled'
              inverted
              vertical
              visible={visible}
              width='thin'
              color='grey'
              style={{ height: '100vh', minHeight: '100vh' }}
          >
            <Button fluid style={{ zIndex: 2 }} icon color='grey' disabled={false} onClick={this.handleShowClick}>
              <Icon name='bars'/>
            </Button>
            <Menu.Item style={{ floated: 'left', width: '100%' }} id="navbar-home"
                       as={NavLink} exact to="/" onClick={this.handleShowClick}>
              <IconGroup>
                <Icon name='home'/>
                Home
              </IconGroup>
            </Menu.Item>
            <Menu.Item style={{ floated: 'left', width: '100%' }} id="navbar-home"
                       as={NavLink} exact to="/who" onClick={this.handleShowClick}>
              <IconGroup>
                <Icon name='question circle outline icon'/>
                WHO IS HIRO?
              </IconGroup>
            </Menu.Item>
            <Menu.Item style={{ floated: 'left', width: '100%' }} id="navbar-home"
                       as={NavLink} exact to="/request" onClick={this.handleShowClick}>
              <IconGroup>
                <Icon name='camera icon'/>
                モデル撮影依頼
              </IconGroup>
            </Menu.Item>
            <Menu.Item style={{ floated: 'left', width: '100%' }} id="navbar-home"
                       href="https://twitter.com/kinnikubanker" onClick={this.handleShowClick}>
              <IconGroup>
                <Icon name="twitter icon"/>
                日々のトレーニング記録
              </IconGroup>
            </Menu.Item>
            <Menu.Item style={{ floated: 'left', width: '100%' }} id="navbar-home"
                       href="https://m.youtube.com/channel/UCoA-NBQV0ueE9wKNb1BScAQ" onClick={this.handleShowClick}>
              <IconGroup>
                <Icon name="youtube icon"/>
                vlogを10分で
              </IconGroup>
            </Menu.Item>
            <Menu.Item style={{ floated: 'left', width: '100%' }} id="navbar-home"
                       href="https://www.instagram.com/hiro_life6/" onClick={this.handleShowClick}>
              <IconGroup>
                <Icon name="instagram icon"/>
                トレーニングメニューや筋トレ日記
              </IconGroup>
            </Menu.Item>
          </Sidebar>
        </div>
    );
  }
}

export default SideNavBar;
