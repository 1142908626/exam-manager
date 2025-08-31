import { AdminForm, AdminFormProps } from '@/client-app/admin-component/admin-form';
import { Modal, ModalProps } from 'antd';
import { useState } from 'react';

export type AdminModalFormProps = ModalProps & {
  formOption: AdminFormProps
}

export function AdminModalForm (props: AdminModalFormProps) {
  const [ values, setValues ] = useState({});
  return (
    <Modal title={ props.title } open={ props.open } onCancel={ props.onCancel }
           onOk={ () => props.onOk(values) }
           destroyOnHidden={ true }>
      <AdminForm data={ props.formOption.data } layout="horizontal" { ...props.formOption }
                 onValuesChange={ (_, allValues) => setValues(allValues) }/>
    </Modal>
  );
}