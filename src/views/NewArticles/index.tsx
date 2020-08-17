import React from 'react';
import { Tabs } from 'antd';

import { Container } from './styles';
import MakrDowns from '../../components/MakrDowns';
import Edit from '../../components/Edit';
const { TabPane } = Tabs;


const NewArticles: React.FC = () => {

  return (
    <Container>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab=" 富文本编辑器" key="1">
          <Edit />
        </TabPane>
        <TabPane tab="MarkDown编辑器" key="2">
          <MakrDowns />

        </TabPane>

      </Tabs>
    </Container>
  );
}

export default NewArticles;