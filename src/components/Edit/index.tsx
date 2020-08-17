import React, { useCallback, useState } from 'react';
import 'braft-editor/dist/index.css'
import { Form, Input, Button, DatePicker, Space, Select } from 'antd';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { Container, MarkUp } from './styles';
const { Option, OptGroup } = Select;

const Edit: React.FC = () => {
  const [editorData, setEditorData] = useState(
    BraftEditor.createEditorState(null)
  )
  const handleChange = useCallback(value => {
    setEditorData(value)
  }, [])
  const onFinish = (values: any) => {
    console.log(values);

  }
  /**
   * 获取时间
   */
  const onChange = function (value: any, dateString: any) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  /**
   * 时间获取借宿
   */
  const onOk = function (value: any) {
    console.log('onOk: ', value);
  }
  /**
   * 获取类型
   */
  const handleType = function (value: any) {
    console.log(`selected ${value}`);
  }
  return (
    <Container>
      <Form name="horizontal_login" layout="inline" onFinish={onFinish}>
        <Form.Item
          name="title"
          rules={[{ required: false, message: 'Please input your username!' }]}
          label="文章标题"
        >
          <Input placeholder="文章标题" style={{ width: '300px' }} />
        </Form.Item>
        <Form.Item label="日期"
          name="time"
        >
          <Space direction="vertical" size={12}>
            <DatePicker showTime onChange={onChange} onOk={onOk} />
          </Space>
        </Form.Item>
        <Form.Item label="文章类型">
          <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleType}>
            <OptGroup label="类型">
              <Option value="jack">Vue</Option>
              <Option value="lucy">React</Option>
            </OptGroup>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
      <MarkUp>
        <BraftEditor value={editorData} onChange={handleChange} />
      </MarkUp>
    </Container>
  );
}

export default Edit;