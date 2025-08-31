'use client';
import { menuOptionData, MenuTypeEnum } from '@/client-app/constants/menu.data';
import { MenuOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { ReactNode } from 'react';

export function AdminPage ({ children }: { children: ReactNode }) {
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
                <Menu defaultSelectedKeys={ MenuTypeEnum.EXAM_LIST }
                      items={ menuOptionData }/>
              </Layout.Sider>
              <Layout.Content>
                { children }
              </Layout.Content>
            </Layout>
          </Layout.Content>
        </Layout>
      </Layout.Content>
    </Layout>
  );
}