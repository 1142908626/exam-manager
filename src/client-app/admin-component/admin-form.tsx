import { Button, Form, FormProps, Input, Select, SelectProps, Switch } from 'antd';
import type { ButtonHTMLType } from 'antd/es/button/buttonHelpers';
import { omit } from 'next/dist/shared/lib/router/utils/omit';
import { NamePath } from 'rc-field-form/es/interface';
import { ReactNode } from 'react';

export enum FormItemType {
  INPUT = 'input',
  SELECT = 'select',
  BUTTON = 'button',
  SWITCH = 'switch'
}

export type FormItemOptionType<T> = {
  type: FormItemType.INPUT | FormItemType.SELECT | FormItemType.SWITCH,
  label: string,
  name: NamePath,
  placeholder: string,
  params?: T
}

export type FormButtonOptionType = {
  type: FormItemType.BUTTON,
  label: string;
  name: NamePath;
  htmlType: ButtonHTMLType
  click: () => void
}


export type FormOption = (FormItemOptionType<SelectProps> | FormButtonOptionType)

export type AdminFormProps = {
  data: FormOption[],
} & FormProps

export function AdminForm (props: AdminFormProps) {
  const data = props.data;

  return (
    <Form { ...omit(props, 'data') }>
      { data.map(formItemOption => {
        let FormItemChildren: ReactNode = null;

        switch (formItemOption.type) {
          case FormItemType.BUTTON:
            FormItemChildren = <Button type="primary" onClick={ formItemOption.click }
                                       htmlType={ formItemOption.htmlType }>{ formItemOption.label }</Button>;
            break;
          case FormItemType.SELECT:
            FormItemChildren =
              <Select placeholder={ formItemOption.placeholder } options={ formItemOption.params.options }
                      style={ formItemOption.params.style }/>;
            break;
          case FormItemType.INPUT:
            FormItemChildren = <Input placeholder={ formItemOption.placeholder }/>;
            break;
          case FormItemType.SWITCH:
            FormItemChildren = <Switch/>;

        }
        return <Form.Item label={ formItemOption.label } name={ formItemOption.name } key={ formItemOption.name }>
          { FormItemChildren ? FormItemChildren : null }
        </Form.Item>;
      }) }

    </Form>
  );
}