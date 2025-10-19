'use client';
import { AdminPage } from '@/client-app/admin-component/admin-page';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Upload, UploadProps } from 'antd';

export default function ExamIntroImage () {


  const handleUpload: UploadProps['onChange'] = (info) => {

  };
  return (
    <AdminPage>
      <Form>
        <Upload name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={ false }
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                beforeUpload={ handleUpload }>
          <PlusOutlined/>
        </Upload>
        <Form.Item label={ '宣传文案' }>
          <Input placeholder={ '请输入宣传文案' }/>
        </Form.Item>
      </Form>

    </AdminPage>
  );
}