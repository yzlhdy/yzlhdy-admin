import React, { useState } from 'react';
import 'braft-editor/dist/index.css'
import { Form, Input, Button, DatePicker, Space, Select, message } from 'antd';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { Container, MarkUp } from './styles';
import { createArcion, CrateArcion } from '../../api/user'
const { Option, OptGroup } = Select;

const Edit: React.FC = () => {
  const [editorData, setEditorData] = useState(
    BraftEditor.createEditorState(null)
  )

  const [edittor, setEdittor] = useState<string>('')
  const [types, settypes] = useState<number>(0)
  const handleChange = (editorState: any) => {
    setEditorData({ editorState })

    const htmlContent = editorState.toHTML()
    // const result = await saveEditorContent(htmlContent)
    setEdittor(htmlContent)
  }
  const onFinish = (values: any) => {
    let request: CrateArcion = {
      name: values.title,
      description: edittor,
      columnId: types,
      username: 'admin'
    }

    createArcion(request).then(res => {
      if (res.data.code === 200) {
        message.success('创建成功')
      }

    })
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
  const submitContent = async () => {
    // Pressing ctrl + s when the editor has focus will execute this method
    // Before the editor content is submitted to the server, you can directly call editorState.toHTML () to get the HTML content

  }
  /**
   * 获取类型
   */
  const handleType = function (value: number) {
    settypes(value)
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
          <Select defaultValue={1} style={{ width: 200 }} onChange={handleType}>
            <OptGroup label="类型">
              <Option value={1}>Vue</Option>
              <Option value={2}>React</Option>
            </OptGroup>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
      <MarkUp>
        <BraftEditor value={editorData} onChange={handleChange} onSave={submitContent} />
      </MarkUp>
    </Container >
  );
}

export default Edit;