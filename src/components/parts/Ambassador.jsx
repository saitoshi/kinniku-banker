import React from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Tab } from 'semantic-ui-react';

const ambassadorList = [
  { menuItem: 'MyProtein', render: () => <Tab.Pane>
      <Button href = "http://tidd.ly/8e2a144c">マイプロのご購入</Button>
    </Tab.Pane> },
  { menuItem: '過去作品', render: () => <Tab.Pane><p></p></Tab.Pane> },
  { menuItem: 'お問い合わせ', render: () => <Tab.Pane><p>お気軽にInstagramメッセージにて、ご質問ください。</p>
      <Form>
        <Form.Field>
          <label>EMAIL メールアドレス</label>
          <input placeholder='email メールアドレス'/>
        </Form.Field>
        <Form.Field>
          <label>メッセージ Message</label>
          <input placeholder='messsage'/>
        </Form.Field>
        <Button>Submit 送信</Button>
      </Form>
    </Tab.Pane> },
]
