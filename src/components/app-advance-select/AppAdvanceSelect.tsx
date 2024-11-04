import React from 'react'
import { Select } from 'antd'

interface IProps {
    options: any
    value?: any
    onChange: any
    trackBy: string
}

/**
 * antd select 组件的 value 只支持字符串，
 * 开启 labelInValue 后也不是一个完整的 option 对象
 * 这里实现类似 Angularjs 里 ng-model-options="{trackBy: '$value.deliverable'}" 的效果
 * 并且实现 value 为完整的对象
 */
const AdvanceSelect = (props: IProps) => {
    const { options, value, onChange, trackBy } = props
    const handleChange = (selectedValues: string[]) => {
        debugger
        const selectedOptions = options.filter((option: any) => selectedValues.includes(option[trackBy]))
        onChange(selectedOptions)
    }

    return (
        <Select
            mode="multiple"
            options={options}
            value={value && value[trackBy] || undefined}
            onChange={handleChange}
        >
        </Select>
    )
}

export default AdvanceSelect