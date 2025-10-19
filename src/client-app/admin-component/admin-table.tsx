import { Table, TableProps } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { format } from 'date-fns';
import { CSSProperties, useState } from 'react';


export enum AdminTableDataTypeEnum {
  DATE = 'date',
  ENUM = 'enum',
}

type AdminDataTypeParamsType<T extends AdminTableDataTypeEnum, P> = {
  dataType?: T,
  params?: P
}

type DateDataTypeParamsType = AdminDataTypeParamsType<AdminTableDataTypeEnum.DATE, {
  format?: string,
  style: CSSProperties
}>

type EnumDataTypeParamsType = AdminDataTypeParamsType<AdminTableDataTypeEnum.ENUM, Record<string, {
  style?: CSSProperties, text?: string
}>>


export type AdminColumnsType<T> = {
  title: ColumnsType[number]['title'],
  dataIndex: keyof T,
  render?: ColumnsType[number]['render']

} & (DateDataTypeParamsType | EnumDataTypeParamsType)

export type AdminTableProps<T extends object> = {
  columns: AdminColumnsType<T>[],
  dataSource: T[]
  total: number
} & Omit<TableProps<T>, 'columns' | 'dataSource'>

export function AdminTable<T extends object> (props: AdminTableProps<T>) {
  const [ selectedRowKeys, setSelectedRowKeys ] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };


  const columns: ColumnsType = props.columns.map(item => {
    const option: ColumnsType[number] = {
      title: item.title,
      dataIndex: item.dataIndex,
      key: item.dataIndex,
      render: item.render
    };
    switch (item.dataType) {
      case AdminTableDataTypeEnum.DATE:
        option.render = (val: Date) => <span
          style={ item.params.style }>{ format(val, item.params.format || 'yyyy/MM/dd') }</span>;
        break;
      case AdminTableDataTypeEnum.ENUM:
        option.render = (val: string) => <span
          style={ item.params[val]?.style || {} }>{ item.params[val]?.text || val }</span>;
        break;

    }
    return option;
  });
  return (
    <Table { ...props } columns={ columns } dataSource={ props.dataSource } rowSelection={ {
      selectedRowKeys,
      onChange: onSelectChange,
    } }/>
  );
}