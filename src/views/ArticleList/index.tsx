import React, { useEffect, useState } from 'react';
import { arcionList, ArcionData } from '../../api/user'
import { Container } from './styles';
import { Card, Table, Space, Button, Pagination } from 'antd'


const ArticleList: React.FC = () => {

  const [articleLists, setarticleList] = useState<any[]>([])
  const [total, setTotal] = useState<number>(0)
  const [pagesize, setPagesize] = useState<number>(1)
  let paramsRequest: ArcionData = {
    pageSize: 10,
    pageIndex: pagesize
  }
  const columns = [
    {
      title: '编号',         //列名称
      dataIndex: 'id',
      width: 100,
      key: 'id',    //数据源的字段名
    },
    {
      title: '创建人',
      dataIndex: 'createBy',
      width: 150,
      key: 'createBy',
    },
    {
      title: '标题',
      dataIndex: 'name',
      width: 200,
      key: 'name'
    },
    {
      title: '内容',
      dataIndex: 'description',
      width: 650,
      key: 'description'

    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      width: 180,
      key: 'createTime'
    },
    {
      title: '操作',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <Button type="primary">修改</Button>
          <Button type="dashed" >删除</Button>
        </Space>
      ),
    },
  ]
  useEffect(() => {
    arcionList(paramsRequest).then(res => {
      if (res.data.code === 200) {
        setarticleList(res.data.data.commodityList)
        setTotal(res.data.data.total)
        console.log(res.data.data.total);

      }

    })
    return () => {

    }
  }, [])

  // const handelDelete = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  //   console.log(e.target);

  // }

  const onChange = (page: number) => {
    setPagesize(page)
    arcionList(paramsRequest).then(res => {
      if (res.data.code === 200) {
        setarticleList(res.data.data.commodityList)
        setTotal(res.data.data.total)
        console.log(res.data.data.total);

      }

    })
  }
  return (
    <Container>
      <Card title={"文章列表"}>
        <Table columns={columns} dataSource={articleLists} bordered>
        </Table>
        <Pagination current={pagesize} onChange={onChange} total={total} />
      </Card>
    </Container>
  );
}

export default ArticleList;