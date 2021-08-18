import React from "react";
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Header, Container, Segment } from 'semantic-ui-react';

class　Who extends React.Component {
  render() {
    return (
        <div className='who'>
          <br/>
          <br/>
          <Segment>
            <Segment inverted color = 'teal'><Header as = 'h2'>自己紹介</Header>
            </Segment>
            <p>関西学院大学卒業後、銀行に就職　筋トレを始め、その魅力に取り導かれる。
              NSCA-PTの資格を取得し、パーソナルトレーナーとしての活動を開始した。　SNSの総フォロワー数は合計で３万人を突破した。</p>
          </Segment>
        </div>
    );
  }
}

export default Who;
