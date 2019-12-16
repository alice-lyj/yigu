import React ,{Component} from "react";
import { Route, Redirect , Switch,Link} from  "react-router-dom";
import { Layout } from 'antd';
import "antd/dist/antd.css";
import "./assets/css/global.css";
import "./assets/css/app.css";
import "./font/iconfont.css";
import {mainRoutes,otherRoutes} from "./routes";
const {Footer, Content } = Layout;

class App extends Component {
    render(){
        return (
            <Layout className="app" style={{height:"100%"}}>
                <Content className="content"  id="content" style={{margin:0,padding:0,width:"100%",height:"100%"}}>
                    <Switch>
                        {
                            mainRoutes.map((route)=>{
                                return <Route 
                                            key={route.pathname}
                                            path={route.pathname} 
                                            component={route.component}
                                        />
                            })
                        }
                        <Redirect to={mainRoutes[0].pathname} from="/" exact/>
                    </Switch>
                </Content>
                {   
                        (this.props.location.pathname ===otherRoutes[0].pathname 
                            ? 
                            <Route 
                                    path={otherRoutes[0].pathname } 
                                    component={otherRoutes[0].component}
                                    key={otherRoutes[0].pathname}
                            />
                            :<Footer className="footer">
                            <div className="box">
                            {   
                                mainRoutes.map((route,index)=>{
                                    return (<Link
                                                key={route.pathname}
                                                to={route.pathname}
                                                className={(this.props.location.pathname === route.pathname)? "active":""}
                                            >
                                                <i className="iconfont" style={{pointerEvents:"none"}}>{route.icon}</i>
                                                <span style={{pointerEvents:"none"}}>{route.name}</span>
                                            </Link>       
                                    )
                                })
                            }
                            </div>
                            </Footer> 
                        )||
                        (this.props.location.pathname ===otherRoutes[1].pathname 
                            ? 
                            <Route 
                                    path={otherRoutes[1].pathname } 
                                    component={otherRoutes[1].component}
                                    key={otherRoutes[1].pathname}
                            />
                            :<Footer className="footer">
                            <div className="box">
                            {   
                                mainRoutes.map((route,index)=>{
                                    return (<Link
                                                key={route.pathname}
                                                to={route.pathname}
                                                className={(this.props.location.pathname === route.pathname)? "active":""}
                                            >
                                                <i className="iconfont" style={{pointerEvents:"none"}}>{route.icon}</i>
                                                <span style={{pointerEvents:"none"}}>{route.name}</span>
                                            </Link>       
                                    )
                                })
                            }
                            </div>
                            </Footer> 
                        )||
                        (this.props.location.pathname ===otherRoutes[2].pathname 
                            ? 
                            <Route 
                                    path={otherRoutes[2].pathname } 
                                    component={otherRoutes[2].component}
                                    key={otherRoutes[2].pathname}
                            />
                            :<Footer className="footer">
                            <div className="box">
                            {   
                                mainRoutes.map((route,index)=>{
                                    return (<Link
                                                key={route.pathname}
                                                to={route.pathname}
                                                className={(this.props.location.pathname === route.pathname)? "active":""}
                                            >
                                                <i className="iconfont" style={{pointerEvents:"none"}}>{route.icon}</i>
                                                <span style={{pointerEvents:"none"}}>{route.name}</span>
                                            </Link>       
                                    )
                                })
                            }
                            </div>
                            </Footer> 
                        )||
                        (this.props.location.pathname === otherRoutes[3].pathname 
                            ? 
                            <Route 
                                    path={otherRoutes[3].pathname } 
                                    component={otherRoutes[3].component}
                                    key={otherRoutes[3].pathname}
                            />
                            :<Footer className="footer">
                            <div className="box">
                            {   
                                mainRoutes.map((route,index)=>{
                                    return (<Link
                                                key={route.pathname}
                                                to={route.pathname}
                                                className={(this.props.location.pathname === route.pathname)? "active":""}
                                            >
                                                <i className="iconfont" style={{pointerEvents:"none"}}>{route.icon}</i>
                                                <span style={{pointerEvents:"none"}}>{route.name}</span>
                                            </Link>       
                                    )
                                })
                            }
                            </div>
                            </Footer> 
                        )          
                }
            </Layout>
        )
    }
    componentDidMount(){

    }
}

export default App;