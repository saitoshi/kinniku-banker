import React from "react";
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Form, Header, Image, Segment, Tab } from 'semantic-ui-react';
import SideNavBar from './SideNavBar';

const ambassadorPane = [
  { menuItem: 'myProtein', render: () => <Tab.Pane>
      <Image centered size = 'large' src ='https://pbs.twimg.com/media/E0YZVW8VkAcAAvu?format=jpg&name=medium'/>
      <br/>
      <div className='comment'>（何故ひろさんがマイプロをおすすめするか) <br/>
        <Button href ="http://tidd.ly/8e2a144c">マイプロ購入</Button>
      </div>
    </Tab.Pane> },
  { menuItem: 'Gorilla Wear', render: () => <Tab.Pane>
      <Image centered size = 'large' src ='https://pbs.twimg.com/media/E08zht6VUAEUy42?format=jpg&name=large'/>
      <br/>
      <div className='comment'>（何故ひろさんがゴリラウェアをおすすめするか) <br/>
        <br/>
        <Button href ="https://gorillawearjapan.com/">ゴリラウェア購入</Button>
        <Segment inverted color = 'teal'><b>Coupon Code: okinawa15</b></Segment>
      </div>
    </Tab.Pane> },
  { menuItem: 'Base Food', render: () => <Tab.Pane>  <Image centered size = 'large' src ='https://pbs.twimg.com/media/E08zht6VUAEUy42?format=jpg&name=large'/>
      <br/>
      <div className='comment'>（何故ひろさんがベースフードをおすすめするか) <br/>
        <Button href ="https://shop.basefood.co.jp/lp/form?argument=WTgLzY2D&dmai=a606beace87cea&gbraid=0AAAAADNwYBSZz95VEMVyCzWYgH0tZLszt&gclid=CjwKCAjw1JeJBhB9EiwAV612yyQpfRffxj_jfQLshBRl0GrmhN4gxBKAG3ClZZlB-TinALl_WfE-zxoCCcAQAvD_BwE">ベースフード購入</Button>
      </div>
    </Tab.Pane> },
]

class　Who extends React.Component {
  render() {
    return (
        <div>
        <SideNavBar/>
          <Container fluid>
        <div className='who'>
          <br/>
          <br/>
          <Segment>
            <Segment inverted color = 'teal'><Header as = 'h2'>自己紹介</Header>
            </Segment>
            <p>関西学院大学卒業後、銀行に就職　筋トレを始め、その魅力に取り導かれる。
              NSCA-PTの資格を取得し、パーソナルトレーナーとしての活動を開始した。　SNSの総フォロワー数は合計で３万人を突破した。</p>
              <Image centered size = 'large' src = "https://pbs.twimg.com/media/E9Tnq52VIAMbdJR?format=jpg&name=large"/>
          </Segment>
          <Segment>
            <Segment inverted color = 'teal'><Header as = 'h2' textAlign = 'center'>Ambassador</Header></Segment>
            <div className='comment'>僕がアンバサダーとして活躍している各商品です。</div>
            <br/>
            <Tab panes = {ambassadorPane}/>
          </Segment>
        </div>
          </Container>
        </div>
    );
  }
}

export default Who;
