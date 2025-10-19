'use client';
import { menuOptionData, MenuTypeEnum } from '@/client-app/constants/menu.data';
import { MenuOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { ReactNode, useEffect, useState } from 'react';

export function AdminPage ({ children }: { children: ReactNode }) {
  const [ routeKeys, setRouteKeys ] = useState([ MenuTypeEnum.EXAM_LIST ]);
  useEffect(() => {
    const url = window.location.pathname;
    const curRouteKeys = url.split('/').filter(Boolean);
    setRouteKeys(curRouteKeys);
  }, []);

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
                <Menu selectedKeys={ routeKeys }
                      items={ menuOptionData }
                      onSelect={ ({ keyPath }: { keyPath: string[] }) => {
                        window.location = keyPath.join('/');
                      } }
                />
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