import React from "react";
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Header, Image, Segment, Tab } from 'semantic-ui-react';
import SideNavBar from './SideNavBar';

const ambassadorPane = [
  { menuItem: 'myProtein', render: () => <Tab.Pane>
      <Image centered size = 'large' src ='https://pbs.twimg.com/media/E0YZVW8VkAcAAvu?format=jpg&name=medium'/>
      <Header as = 'h2' textAlign = 'center'>myProtein のここが凄い！！</Header>
      <div className='comment'>
        <ol>
          <li>業界トップクラスで値段が安く、筋トレ初心者の方でも、使いやすいこと</li>
          <li>プロテインやアミノ酸など、身体を作るのに不可欠な商品のラインナップが豊富で、沢山の選択肢があること</li>
          <li>成分や品質も最近大幅な改善が行われて、安心・安全に利用できる</li>
        </ol>
        以下、<b>安い！商品が豊富！品質が良い！</b>の3点から、とてもお勧めしています😊
        <br/>
        <br/>
        <Button href ="http://tidd.ly/8e2a144c" color = 'teal' size ='big'>マイプロ購入</Button>
      </div>
    </Tab.Pane> },
  { menuItem: 'Gorilla Wear', render: () => <Tab.Pane>
      <Image centered size = 'large' src ='https://pbs.twimg.com/media/E08zht6VUAEUy42?format=jpg&name=large'/>
      <Header as = 'h2' textAlign = 'center'>ゴリラウェア　のここが凄い！！</Header>
      <div className='comment'>
        <ol>
          <li>デザインがカッコ良くて、着ていると、自然とモチベーションが上がる</li>
          <li>着用感がとても良く、動きやすくトレーニングしやすい</li>
          <li>個人的にゴリラが大好き💕</li>
        </ol>
        <br/>
        <Button color = 'teal' size = 'big' href ="https://gorillawearjapan.com/">ゴリラウェア購入</Button>
        <Segment inverted color = 'teal'><b>Coupon Code: okinawa15</b></Segment>
      </div>
    </Tab.Pane> },
  { menuItem: 'Base Food', render: () => <Tab.Pane>  <Image centered size = 'large' src ='https://pbs.twimg.com/media/E08zht6VUAEUy42?format=jpg&name=large'/>
      <br/>
      <div className='comment'>（何故ひろさんがベースフードをおすすめするか) <br/>
        <Button color = 'teal' size = 'big' href ="https://shop.basefood.co.jp/lp/form?argument=WTgLzY2D&dmai=a606beace87cea&gbraid=0AAAAADNwYBSZz95VEMVyCzWYgH0tZLszt&gclid=CjwKCAjw1JeJBhB9EiwAV612yyQpfRffxj_jfQLshBRl0GrmhN4gxBKAG3ClZZlB-TinALl_WfE-zxoCCcAQAvD_BwE">ベースフード購入</Button>
      </div>
    </Tab.Pane> },
]

class　Who extends React.Component {
  render() {
    return (
        <div>
        <SideNavBar/>
          <Container>
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
            <br/>
          </Container>
        </div>
    );
  }
}

export default Who;
