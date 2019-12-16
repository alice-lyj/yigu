import React, { Component } from 'react'
import {Icon,Menu, Dropdown,Layout} from "antd";
import {Link} from "react-router-dom";
import BScroll from 'better-scroll';
import {connect} from "react-redux";
import {getSortApi} from "../reducers/header.redux";
import {getListApi,getEachListApi} from "../reducers/list.redux";

const { Header} = Layout;
const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link to="/index">首页</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
            <Link to="#">分类</Link>
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
class ClassifyHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            BScroll: '',
            index:0,
            pagenum :1,
            num : 10,
        }
    }
    //调用父组件的添加蒙层的方法
    change=()=>{
        this.props.changeApacity();
    }
    //横向滚动的功能
    scrollHeader(){
        const con = this.refs.con
        if(!this.scroll){
            this.scroll = new BScroll(con,{
                scrollX : true,
                click: true,
                probeType : 3
            })
        }else{ 
           this.scroll.refresh()
        }
    }    
    //通过点击头部的分类 切换列表的数据  
    changeList = (e,item,index)=>{
        this.setState(()=>{
            return {
                index
            }
        })
        this.props.getEachListApi(item.tid,1);
    }
    render() {
        const {sortData,sliderData} = this.props.sort;
        return (
                <Header className="header">
                <div className="fixed">
                    <div className="box">
                        <Icon type="left" className="left"/>
                        <Link className="search" to="/search">
                            <Icon type="search" style={{color:"#444"}}/>
                            <span></span>
                        </Link>
                        <div>
                            <Dropdown overlay={menu} trigger={['click']}>
                                <a className="ant-dropdown-link" href="#" onClick={this.change}>
                                    <Icon type="ellipsis" className="ellipsis"/>
                                </a>
                            </Dropdown>
                        </div>   
                    </div>
                    <div className="nav">
                        <div ref="con" className="lists">
                        <ul 
                            className="scroll" ref="scrollList" 
                            style={{width: `${75 * sortData.length}px` }}
                        >
                            {
                                sortData.map((item,index)=>{
                                    return (
                                        <li 
                                            className="headerList ellipsis" 
                                            key={item.tname} 
                                            onClick={(ev)=>this.changeList(ev,item,index)}
                                        >
                                           <span style={{color:index === this.state.index ? "red":""}}>{item.tname}</span> 
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        </div>
                    </div>
                </div>
            </Header>
        )
    }
    componentDidMount(){ 

        this.props.getListApi();
        this.props.getSortApi(0);
        this.props.getEachListApi()
        this.scrollHeader();

    }
}

const mapStateToProps = state=>{
    return {
        sort : state.sortData,
        listData : state.listData
    }
}

export default connect(mapStateToProps,{getSortApi,getListApi,getEachListApi})(ClassifyHeader);


