import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import FormPage from './pages/Form'
import ViewPage from './pages/View'

function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={FormPage} />
                <Route exact path="/view/:param" component={ViewPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter