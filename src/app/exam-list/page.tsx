'use client';
import { getExamRequest, upsertExamRequest } from '@/client-app/actions/exam.action';
import { AdminForm, FormItemType, FormOption } from '@/client-app/admin-component/admin-form';
import { AdminModalForm, AdminModalFormProps } from '@/client-app/admin-component/admin-modal-form';
import { AdminPage } from '@/client-app/admin-component/admin-page';
import { AdminTable, AdminTableDataTypeEnum, AdminTableProps } from '@/client-app/admin-component/admin-table';
import { ExamDataType, ExamStatusEnum } from '@/server-app/dto/exam.dto';
import { PaginationType } from '@/server-app/types/pagination.type';
import { Button, Layout } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';


/**
 * TODO 实现编辑保留id功能
 * @constructor
 */
const initDialogStatus = {
  title: '',
  open: false,
  formOption: {
    data: [
      { type: FormItemType.INPUT, label: '名字', name: 'name' },
      {
        type: FormItemType.SELECT, label: '状态', name: 'status', params: {
          options: [
            { label: ExamStatusEnum.DOWN, value: ExamStatusEnum.DOWN },
            { label: ExamStatusEnum.ONLINE, value: ExamStatusEnum.ONLINE }
          ]
        }
      },
      { type: FormItemType.SWITCH, label: '考试页介绍', name: 'showCourseIntro' },
      { type: FormItemType.SWITCH, label: '学习资料', name: 'showLearningFile' },
      { type: FormItemType.SWITCH, label: '考试信息', name: 'showExamInformation' },
    ]
  }
} as AdminModalFormProps;

const initExamListOption = {
  totalPage: 10,
  page: 1,
  size: 1,
  count: 10,
  data: []
};
export default function ExamList () {


  const [ dialog, setDialog ] = useState<AdminModalFormProps>(initDialogStatus);

  const [ loadStatus, setLoadStatus ] = useState(false);

  const [ examListOption, setExamListOption ] = useState<PaginationType<ExamDataType>>(initExamListOption);
  const [ pagination, setPagination ] = useState(1);

  const [ searchParams, setSearchParams ] = useState<Partial<ExamDataType>>();


  const onEdit = (id?: number) => {
    const isAdd = id === undefined;
    setDialog({
      open: true,
      title: `${ isAdd ? '新增' : '编辑' }考试`,
      formOption: {
        ...initDialogStatus.formOption,
        initialValues: examListOption.data.find(item => item.id === id)
      }
    });
  };

  useEffect(() => {
    if (loadStatus) {
      getExamRequest().then(data => setExamListOption({
        ...initExamListOption,
        data
      })).finally(
        () => setLoadStatus(false)
      );
    }

  }, [ loadStatus, pagination, searchParams ]);

  useEffect(() => {
    setLoadStatus(true);
  }, []);

  const handleOk = useCallback((data: ExamDataType) => {
    upsertExamRequest({
      ...dialog.formOption.initialValues,
      ...data,
    }).then(() => setLoadStatus(true)).finally(() => setDialog(initDialogStatus));
  }, [ dialog.formOption.initialValues ]);

  const courseFormOptions = [
    { type: FormItemType.INPUT, label: '关键字', name: 'keyword', placeholder: '请输入' },
    {
      type: FormItemType.SELECT,
      label: '状态',
      name: 'status',
      placeholder: '请输入',
      params: {
        options: [ { value: ExamStatusEnum.DOWN, label: ExamStatusEnum.DOWN } ],
        style: { width: '10rem' }
      }
    },
    { type: FormItemType.BUTTON, label: '查询', name: 'search', htmlType: 'submit' },
    { type: FormItemType.BUTTON, label: '新建考试', name: 'add', click: () => onEdit(), htmlType: 'button' }
  ] as FormOption[];


  const examTableOption: AdminTableProps<ExamDataType> = {
    total: 0,
    dataSource: examListOption.data,
    columns: [
      { title: 'ID', dataIndex: 'id' },
      { title: '名称', dataIndex: 'name' },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        dataType: AdminTableDataTypeEnum.DATE,
        params: { style: { color: '#4293F4' } }
      },
      {
        title: '上线时间',
        dataIndex: 'onlineTime',
        dataType: AdminTableDataTypeEnum.DATE,
        params: { style: { color: '#4293F4' } }
      },
      {
        title: '更新时间',
        dataIndex: 'updateTime',
        dataType: AdminTableDataTypeEnum.DATE,
        params: { style: { color: '#4293F4' } }
      },
      { title: '更新提示', dataIndex: 'updateComment' },
      {
        title: '状态',
        dataIndex: 'status',
        dataType: AdminTableDataTypeEnum.ENUM,
        params: {
          [ExamStatusEnum.DOWN]: { style: { color: 'red' }, text: ExamStatusEnum.DOWN },
          [ExamStatusEnum.ONLINE]: { style: { color: 'blue' }, text: ExamStatusEnum.ONLINE }
        }
      },
      {
        title: '考试介绍图',
        dataIndex: 'showCourseIntro',
        dataType: AdminTableDataTypeEnum.ENUM,
        params: {
          [true]: { text: '显示' }, [false]: { text: '不显示' }
        }
      },
      {
        title: '学习资料',
        dataIndex: 'showLearningFile',
        dataType: AdminTableDataTypeEnum.ENUM,
        params: {
          [true]: { text: '显示' }, [false]: { text: '不显示' }
        }
      },
      {
        title: '考试信息',
        dataIndex: 'showExamInformation',
        dataType: AdminTableDataTypeEnum.ENUM,
        params: {
          [true]: { text: '显示' }, [false]: { text: '不显示' }
        }
      },
      { title: '负责人', dataIndex: 'manager' },
      {
        title: '操作',
        dataIndex: 'id',
        render: (val: number) => <Button type="link" onClick={ () => onEdit(val) }>操作</Button>
      },
    ]
  };
  return (
    <>
      <AdminModalForm { ...dialog } onCancel={ () => setDialog({ ...dialog, open: false }) } onOk={ handleOk }/>
      <AdminPage>
        <Layout>
          <div className="ml-4">
            <AdminForm layout="inline" data={ courseFormOptions } onFinish={ setSearchParams }
            />
          </div>
          <AdminTable<ExamDataType> { ...(examTableOption) } loading={ loadStatus } rowKey="id"
                                    total={ examListOption.count }
                                    pagination={ {
                                      ...pagination,
                                      total: examListOption.count,
                                      pageSize: 10,
                                      onChange: val => setPagination(val)
                                    } as never }/>
        </Layout>
      </AdminPage>
    </>
  );

}