import React, { Component } from 'react';
import {connect} from "react-redux";
import {Icon,Menu, Dropdown} from "antd";
import {Link} from "react-router-dom"
import "@/assets/css/login/login.css";


const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link to="/index">首页</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
            <Link to="/classify">分类</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
            <Link to="/delivery">宅配</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
            <Link to="/cart">购物车</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4">
            <Link to="/my">我的</Link>
        </Menu.Item>
    </Menu>
  );
class Login extends Component {
    render() {
        console.log(window.location);
        return (
            <div className="login">
                <div className="apacity" ref="all"></div>
                <div className="header">
                    <div className="goBack" onClick={this.goBack}>
                        <Icon type="left" className="icon"/>
                    </div>
                    <div className="server">
                        <span>用户登录</span>
                    </div>   
                    <div className="right">
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" href="#" onClick={this.changeApacity}>
                                <Icon type="ellipsis" className="icon" style={{color:"#444"}}/>
                            </a>
                        </Dropdown>
                    </div>
               </div>
            </div>
        )
    }
    changeApacity = ()=>{
        if(this.state.flag){
            this.refs.all.style.display = this.state.display;
            this.setState(()=>{
                return{
                    flag : false,
                    display : "none"
                }
            })
        }
        //点击蒙层消失
        this.refs.all.onclick = ()=>{
            this.refs.all.style.display = this.state.display;
            this.setState({
                flag : true,
                display : "block"
            })
        }    
    }
    componentDidMount(){
        const footer = document.getElementsByClassName("footer")[0];
        document.getElementsByTagName("body")[0].removeChild(footer);
    }
}

export default connect(null,null)(Login);