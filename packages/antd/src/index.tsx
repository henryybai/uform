import './form'
import './fields/string'
import './fields/number'
import './fields/boolean'
import './fields/date'
import './fields/time'
import './fields/range'
import './fields/upload'
import './fields/checkbox'
import './fields/radio'
import './fields/rating'
import './fields/transfer'
import './fields/array'
import './fields/table'
import './fields/textarea'
import './fields/password'
import './fields/cards'

export * from '@uform/react'
export * from './components/formButtonGroup'
export * from './components/button'
export * from './components/layout'
import React from 'react'
import {
  SchemaForm as InternalSchemaForm,
  Field as InternalField
} from '@uform/react'
import { mapStyledProps, mapTextComponent } from './utils'
import { ISchemaFormProps, ISchemaFormExpandProps } from './type'
import { ISchema } from '@uform/types'
import { SwitchProps } from 'antd/lib/switch'
import { CheckboxGroupProps } from 'antd/lib/checkbox'
import {
  DatePickerProps,
  RangePickerProps,
  MonthPickerProps,
  WeekPickerProps
} from 'antd/lib/date-picker/interface'
import { InputNumberProps } from 'antd/lib/input-number'
import { IPasswordProps } from './fields/password'
import { RadioGroupProps } from 'antd/lib/radio'
import { ISliderProps } from './fields/range'
import { RateProps } from 'antd/lib/rate'
import { InputProps } from 'antd/lib/input'
import { TextAreaProps } from 'antd/es/input'
import { TimePickerProps } from 'antd/lib/time-picker'
import { TransferProps } from 'antd/lib/transfer'
import { IUploaderProps } from './fields/upload'
import { SelectProps } from 'antd/lib/select'

export { mapStyledProps, mapTextComponent }

export type SchemaFormProps<V> = ISchemaFormProps<V> & ISchemaFormExpandProps

export default class SchemaForm<V> extends React.Component<SchemaFormProps<V>> {
  render() {
    return <InternalSchemaForm {...this.props} />
  }
}

interface InternalFieldTypes {
  boolean: SwitchProps | SelectProps
  checkbox: CheckboxGroupProps
  date: DatePickerProps
  daterange: RangePickerProps
  month: MonthPickerProps
  week: WeekPickerProps
  year: DatePickerProps
  number: InputNumberProps | SelectProps
  password: IPasswordProps
  radio: RadioGroupProps
  range: ISliderProps
  rating: RateProps
  string: InputProps | SelectProps
  textarea: TextAreaProps | SelectProps
  time: TimePickerProps
  transfer: TransferProps
  upload: IUploaderProps
}

export interface FieldProps<V, T extends string> extends ISchema<V> {
  type?: T
  name?: string
  editable?: boolean
  ['x-props']?: T extends keyof InternalFieldTypes ? InternalFieldTypes[T] : any
}

export class Field<V, T extends string> extends React.Component<
  FieldProps<V, T>
> {
  render() {
    return <InternalField {...this.props} />
  }
}
