import React from "react";
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Header, Segment, Image, Button, Icon} from 'semantic-ui-react';

function Home() {
  return (
      <div className="bg-home">
        <div className="center-screen">
          <Segment>
            <Image src = "https://github.com/saitoshi/kinniku-banker/blob/issue-01/src/components/image/hiro_index.jpg?raw=true" size = "medium" circular centered/>
            <Header as = "h1" textAlign = 'centered'>HIR♾fitness</Header>
            <p>はじめまして！沖縄県で機能的で綺麗な筋肉の育成に夢中のヒロです！🌺 <br/>
              各SNSで筋トレについて発信しています❗️<br/>
              「自信を持って生きる人をより多く」をモットーに明るく元気に活動しています‼️<br/>
              ぜひ一緒にフィットネスや健康生活頑張りましょう😊✨</p>
            <br/>
            <Button.Group>
              <Button>WHO IS HIRO?</Button>
              <Button>WHO IS HIRO?</Button>
              <Button>WHO IS HIRO?</Button>
              <Button><Icon name = "twitter"/></Button>
              <Button><Icon name = "instagram"/></Button>
              <Button><Icon name = "youtube"/></Button>
            </Button.Group>
          </Segment>
        </div>
      </div>
  );
}
export default Home;
