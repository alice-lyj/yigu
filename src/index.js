import React from "react";
import {Provider} from "react-redux";
import ReactDOM from "react-dom";
import {BrowserRouter, Route , Switch ,Redirect} from "react-router-dom";
import store from "./store/store"
import App from "./App";
import {otherRoutes} from "./routes";

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} />
                {
                    otherRoutes.map((routes)=>{
                        return (
                            <Route key={routes.pathname} path={routes.pathname} component={routes.component}/>
                        )
                    })
                }
                <Redirect to="/index" from="/" exact/>
            </Switch>
        </BrowserRouter>   
    </Provider>
),document.getElementById("root"));
