import React, {useState} from 'react'
import { PureSelect } from './pure_component'
import { StyledSelectInputWithLabel } from './styles'
import { nanoid } from 'nanoid'

const SelectComponent = ({
    label = '',
    placeholder,
    options, 
    defaultValue = null, 
    onChange = () => { },
    flexPosition = 'flex-start',
    cssWidth,
}) => {
    const htmlId = nanoid()
    const [selectedOption, setSelectedOption] = useState(defaultValue)
    const hasLabel = label !== ''

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption)
        onChange(selectedOption)
    }

    return <StyledSelectInputWithLabel flexPosition={flexPosition} id={`rollsSelect_${nanoid()}`} className={`rollsSelect`}>
        {
            hasLabel && <label className='label' htmlFor={htmlId}>{label}</label>
        }
        <PureSelect
            cssWidth={cssWidth}
            value={selectedOption}
            options={options}
            onChange={handleChange}
            placeholder={placeholder}
        />
    </StyledSelectInputWithLabel>
}

export default SelectComponent