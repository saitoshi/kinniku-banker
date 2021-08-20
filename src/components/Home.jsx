import React from "react";
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Header, Segment, Image, Button, Icon} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

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
              <Button as = {NavLink} exact to ={"/who"}>WHO IS HIRO?</Button>
              <Button>筋トレ日記</Button>
              <Button>モデル依頼</Button>
              <a href = "https://twitter.com/kinnikubanker"><Button><Icon name = "twitter"/></Button></a>
              <a href = "https://www.instagram.com/hiro_life6/"><Button><Icon name = "instagram"/></Button></a>
              <a href = "https://m.youtube.com/channel/UCoA-NBQV0ueE9wKNb1BScAQ"><Button><Icon name = "youtube"/></Button></a>
            </Button.Group>
          </Segment>
        </div>
      </div>
  );
}
export default Home;
