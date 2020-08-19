import React from 'react';
import { Menu } from 'antd';
import {
  DesktopOutlined,
  AppstoreOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom'
import menuList, { RouterDatas } from '../../router/menuList';
import { useLocation } from 'react-router-dom'
import { Container, Logo } from './styles';
const { SubMenu } = Menu;



const LeftNav: React.FC = () => {
  let openKey: string = ''
  let location = useLocation()
  let path = location.pathname
  const getMenuNodes = (menuList: RouterDatas[]) => {
    return menuList.reduce((pre: any[], item) => {
      if (!item.children) {
        pre.push(
          <Menu.Item key={item.key} icon={<DesktopOutlined />}>
            <Link to={item.key}>{item.title}</Link>
          </Menu.Item>
        )
      } else {
        const cItem = item.children.find((cItem) => {
          return cItem
        })
        if (cItem) {
          openKey = item.key
        }
        pre.push(
          <SubMenu
            key={item.key}
            icon={<AppstoreOutlined />}
            title={
              item.title}
          >
            {getMenuNodes(item.children)}
          </SubMenu>
        )
      }
      return pre
    }, [])
  }
  return (
    <Container>
      <Logo>
        logo
      </Logo>
      <Menu
        selectedKeys={[path]}
        defaultOpenKeys={[openKey]}
        mode="inline"
        theme="light"
        style={{ height: '100vh' }}
      >
        {
          getMenuNodes(menuList)
        }
      </Menu>
    </Container>
  );
}

export default LeftNav;