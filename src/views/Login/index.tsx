import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { loadRequest } from '../../store/modules/repositories/actions'
import { ApplicationState } from '../../store'
import LocalStore from '../../utils/LocalStore'
import { useHistory } from 'react-router-dom'

import { Container, Logins } from './styles';
import { login } from '../../api/user'

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { loading } = useSelector((state: ApplicationState) => state.repositories)
  const onFinish = (values: any) => {
    dispatch(loadRequest(values))
    login(values).then(res => {
      if (res.data.code === 200) {
        message.success('登录成功')
        history.push('/')
        LocalStore.set('token', res.data.data.token)
        LocalStore.set('username', res.data.data.username)
      } else {
        message.error(res.data.msg)
      }

    })
  };
  return (
    <Container>
      <Logins>
        <h1>欢迎登录</h1>
        <Form

          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button loading={loading} type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
              登录
               </Button>
          </Form.Item>
        </Form>
      </Logins >
    </Container >
  )
}

export default Login;