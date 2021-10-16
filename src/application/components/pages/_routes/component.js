import { ROUTES } from 'application/constants'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import * as Pages from 'application/components/pages'

const RoutesComponent = () => {
    console.log('ER:: till here')
    return <Switch>
        <Route exact path={ROUTES.BASE_EXTERNAL} component={Pages.External.MainExternal} />
        <Route exact path={ROUTES.BASE_INTERNAL} component={Pages.Internal.MainInternal} />
    </Switch>
}

export default RoutesComponent
