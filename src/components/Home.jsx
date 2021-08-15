import React from "react";
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Header, Segment, Image } from 'semantic-ui-react';

function Home() {
  return (
      <div className="bg-home">
        <div className="center-screen">
          <Segment>
            <Image src = "image/hiro_index.jpg" size = "medium" cicurlar/>
            <Header as = "h1" textAlign = 'centered'>HIR♾fitness</Header>
            <p>はじめまして！沖縄県で機能的で綺麗な筋肉の育成に夢中のヒロです！🌺 <br/>
              各SNSで筋トレについて発信しています❗️<br/>
              「自信を持って生きる人をより多く」をモットーに明るく元気に活動しています‼️<br/>
              ぜひ一緒にフィットネスや健康生活頑張りましょう😊✨</p>
          </Segment>
        </div>
      </div>
  );
}
export default Home;
