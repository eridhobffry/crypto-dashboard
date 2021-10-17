import { SelectRoll } from 'application/components/atoms'
import { NavStyled } from 'application/components/moleculs'
import { ROUTES } from 'application/constants'
import React from 'react'
import { Fragment } from 'react'
import { useMediaQuery } from 'react-responsive'
import { withRouter } from 'react-router'
import { GlobalStyle } from './global_style'
import { ContentWrapper, MainContentWrapper, MainWrapper, SelectWrapper } from './styles'

const BaseLayout = ({ children, updateShowData, currentPage, match, numberToShow, }) => {
    const options = [
        { value: 20, label: 20 },
        { value: 50, label: 50 },
        { value: 100, label: 'All' },
    ]

    const useMobile = useMediaQuery({ maxWidth: 767 })
    const inOverview = match.path === ROUTES.OVERVIEW
    const handleChange = (selected) => {
        const metaData = {
            start: inOverview ? currentPage === 1 ? 1 : (currentPage-1) * selected.value : 1,
            limit: selected.value,
        }
        updateShowData(metaData)
    }
    return <Fragment>
        <GlobalStyle />
        <MainWrapper>
            <NavStyled />
            <ContentWrapper>
                <SelectWrapper>
                    <SelectRoll
                        cssWidth={useMobile ? '40%' : '10%'}
                        flexPosition='flex-end'
                        options={options}
                        placeholder={'Show'}
                        onChange={(selected) => handleChange(selected)}
                        defaultValue={{
                            label: numberToShow,
                            value: numberToShow
                        }}
                    />
                </SelectWrapper>
                <MainContentWrapper>
                    {children}
                </MainContentWrapper>
            </ContentWrapper>
        </MainWrapper>
    </Fragment>
}

export default withRouter(BaseLayout)
