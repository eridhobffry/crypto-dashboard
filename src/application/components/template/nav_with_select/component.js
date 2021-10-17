import { SelectRoll } from 'application/components/atoms'
import { NavStyled } from 'application/components/moleculs'
import React from 'react'

const NavWithSelectComponent = () => {

    const options = [
        {value: 20, label: 20},
        {value: 50, label: 50},
        {value: 100, label: 'All'},
    ]

    const handleChange = (selected) => {
        console.log('ER:: value', selected)
    }

    return <NavStyled>
        <SelectRoll
            cssWidth='30%'
            flexPosition='flex-end'
            options={options}
            placeholder={'Show'}
            onChange={(selected) => handleChange(selected)}
        />
    </NavStyled>
}

export default NavWithSelectComponent
