import React from 'react';
import LocalStore from '../../utils/LocalStore'
import { Container } from './styles';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom'
import Headers from '../../components/Headers';
import LeftNav from '../../components/LeftNav';

import Article from '../Article';
import ArticleList from '../ArticleList';
import Home from '../Home';
import NewArticles from '../NewArticles';




const { Header, Content, Sider } = Layout;
const Admin: React.FC = () => {
  let token: any = LocalStore.get('token')
  let username: any = LocalStore.get('username')

  if (!token && !username) return <Redirect to='/login' />

  return (
    <Container>
      <Layout style={{ height: '100%' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
        >
          <LeftNav />
        </Sider>
        <Layout >
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} >
            <Headers />
          </Header>
          <Content style={{ margin: '24px 16px 0', background: '#eee' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

              <Switch>
                <Redirect from='/' exact to='/home'></Redirect>
                <Route path='/home' component={Home}></Route>
                <Route path='/article' component={Article}></Route>
                <Route path='/article-list' component={ArticleList}></Route>
                <Route path='/article-add' component={NewArticles}></Route>
              </Switch>
            </div>
          </Content>

        </Layout>
      </Layout>,
    </Container>
  )

}

export default Admin;