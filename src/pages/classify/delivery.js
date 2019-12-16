import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {Icon,Menu, Dropdown} from "antd";
import {connect} from "react-redux"
import img from "./img";
import "../../assets/css/classify/delivery.css"
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

class Delivery extends Component {
    constructor(props){
        super(props);
        this.state={
            flag : true,
            display : "block"
        }
    }
    //调用父组件的添加蒙层的方法
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
    goBack = ()=>{
        this.props.history.goBack(-1);
    }
    render() {
        return (
            <div className="delivery">
                <div className="apacity" ref="all"></div>
                <div className="header">
                    <div className="goBack" onClick={this.goBack}>
                        <Icon type="left" className="icon"/>
                    </div>
                    <div className="server">
                        <span>宅配服务</span>
                    </div>   
                    <div className="right">
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" href="#" onClick={this.changeApacity}>
                                <Icon type="ellipsis" className="icon" style={{color:"#444"}}/>
                            </a>
                        </Dropdown>
                    </div>

               </div>
               <div className="pic">
                    {
                        img.map((item)=>{
                            return (<img src={item} key={item}/>)
                        })
                    }
               </div>
               
            </div>
        )
    }
    componentDidMount(){
        
    }
}

export default connect(null,null)(Delivery);
