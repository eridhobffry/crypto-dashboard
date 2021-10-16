import { ROUTES } from 'application/constants'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import * as Pages from 'application/components/pages'

const RoutesComponent = () => {
    console.log('ER:: till here')
    return <Switch>
        {/* <Route exact path={ROUTES.BASE} component={Pages.External.Overview} /> */}
        <Route exact path={ROUTES.OVERVIEW} component={Pages.External.Overview} />
        <Route exact path={ROUTES.LIQUIDITY} component={Pages.External.Liquidity} />
        <Route exact path={ROUTES.BASE_INTERNAL} component={Pages.Internal.MainInternal} />
        <Redirect to={ROUTES.OVERVIEW} />
    </Switch>
}

export default RoutesComponent
