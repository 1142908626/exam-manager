'use client';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Form, Input, Layout, Menu, Select, Table } from 'antd';


export default function Home () {
  const menuOptions = [
    { label: '全部分类', key: 'all part' },
    { label: '考试列表', key: 'exam list' },
    { label: '科目管理', key: 'course manager' },
    { label: '解析管理', key: 'parse manager' },
    { label: '待更新列表', key: 'upgrading list' }
  ];
  return (
    <Layout>
      <Layout.Sider width={ '3rem' } className="flex justify-center items-center">
        <div className="flex items-center justify-center" style={ { height: '100%' } }>
          <div className="text-white w-4">考试管理</div>
        </div>
      </Layout.Sider>
      <Layout.Content>
        <Layout>
          <div className="bg-white h-20 p-4 border-2 mb-10 text-3xl ">
            <MenuOutlined className="cursor-pointer "/>
          </div>
          <Layout.Content>
            <Layout>
              <Layout.Sider theme="light" style={ { height: '100vh' } }>
                <Menu defaultSelectedKeys={ 'course manager' }
                      items={ menuOptions }/>
              </Layout.Sider>
              <Layout.Content>
                <Layout>
                  <div className="ml-4">
                    <Form layout="inline">
                      <Form.Item label={ '关键字' } name="keyword">
                        <Input placeholder="请输入"/>
                      </Form.Item>
                      <Form.Item label={ '状态' } name="status">
                        <Select placeholder="请输入" style={ { width: '10rem' } }
                                options={ [{ value: 'disabled', label: '禁用1232233' }] }/>
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary">查询</Button>
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary">新建考试</Button>
                      </Form.Item>
                    </Form>
                  </div>
                  <Table></Table>
                </Layout>
              </Layout.Content>
            </Layout>
          </Layout.Content>
        </Layout>
      </Layout.Content>
    </Layout>
  );
}