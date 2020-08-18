import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./Home"

export const Router = () => (
    <BrowserRouter>
        <Route path="/" component={Home} />
    </BrowserRouter>

)

export default Router;