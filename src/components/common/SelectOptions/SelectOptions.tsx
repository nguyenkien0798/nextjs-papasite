import * as React from 'react'
import ReactSelect, { ActionMeta, SingleValue, StylesConfig } from 'react-select'

export interface IOptions {
  readonly value: string
  readonly label: string
}

interface ISelectOptionProps {
  options: IOptions[]
  customStyles?: StylesConfig<IOptions, false>
  onChange: (value: SingleValue<IOptions>) => void
  id?: string
  instanceId: string
  [key: string]: any
}

export default function SelectOption(props: ISelectOptionProps) {
  const { options, customStyles, onChange, ...rest } = props

  return <ReactSelect options={options} styles={customStyles} onChange={onChange} {...rest} />
}
