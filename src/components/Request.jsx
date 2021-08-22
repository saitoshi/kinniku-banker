import React from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Header, Segment, Container, Tab, Image, Form } from 'semantic-ui-react';
import SideNavBar from './SideNavBar';
const panes = [
  { menuItem: '料金', render: () => <Tab.Pane><ul>
      <li><p>移動と撮影時間に対して、5000円／1h</p></li>
      <li><p>上記に加え、移動費用のご負担をお願い致します！</p></li>
      <li><p>沖縄県南城市からの移動になります</p></li>
    </ul></Tab.Pane> },
  { menuItem: '過去作品', render: () => <Tab.Pane><p></p></Tab.Pane> },
  { menuItem: 'お問い合わせ', render: () => <Tab.Pane><p>お気軽にInstagramメッセージにて、ご質問ください。</p></Tab.Pane> },
]

function Request() {
  return (
      <div>
        <SideNavBar/>
        <br/>
        <Container>
          <Segment>
            <Segment inverted color = 'teal'><Header as = "h1" textAlign = 'centered'>モデル撮影依頼</Header></Segment>
            <Image src = "https://github.com/saitoshi/kinniku-banker/blob/main/src/components/image/model.jpeg?raw=true" centered/>
            <br/>
            <p>僕としては、写真撮影は大好きなので、本当は全て引き受けたいのですが、需要の調整ということでご容赦ください
            </p>
            <Tab panes = {panes}/>
          </Segment>
        </Container>

      </div>
  );
}

export default Request;
