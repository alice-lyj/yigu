import React, { Component } from 'react';
import {Icon } from "antd";
import {connect} from "react-redux";
import BScroll from "better-scroll";

import {getEachListApi} from "../reducers/list.redux";
class  ClassContent extends Component{
    constructor(props){
        super(props);
        this.state ={
            page :1
        }
    }
    render() {
        const {listData,listEachData} = this.props.list;
        return (
            <div className="content" ref="list">
                <div className="scroll" style={{height: `${115 * listData.length}px` }}>
               {
                   listEachData.map((item)=>{
                        return (
                            <div key={item.goodsName} className="products">
                                <div className="pic">
                                    <img  src={item.goodsImg}/>
                                </div>
                                <div className="right">
                                    <div className="name ellipsis">{item.goodsName}</div>
                                    <div className="slogan ellipsis">{item.slogan}</div>
                                    <div className="address">
                                        自营
                                        <span className="arrive">次日达</span>
                                        <span className="storehouse">深圳平湖仓</span>
                                    </div>
                                    <div className="price">
                                        <span> ￥{item.mallPrice}</span>
                                        <div className="cart">
                                            <Icon type="shopping-cart" /> 
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        )
                   })
               }
               </div>
            </div>
        )
    }
    scrollList(){
        const list = this.refs.list
        if(!this.scroll){
            this.scroll = new BScroll(list,{
                scrollY : true,
                click: true,
                probeType : 3
            })
        }else{ 
           this.scroll.refresh()
        }
        this.scroll.on("touchEnd",(obj)=>{
            if( obj.y < this.scroll.maxScrollY ){
                this.setState((prev)=>{
                    return {
                        page:++prev.page 
                    }
                },()=>{
                    console.log(this.state.page);
                })
                this.props.getEachListApi(null,this.state.page);
            }
        }) 
       
    }    
    componentDidMount(){
        this.props.getEachListApi(null,this.state.page);
        this.scrollList()
    }
}
const mapStateToProps = state=>{
    return {
        list : state.listData,
        sort : state.sortData
    }
}

export default connect(mapStateToProps,{getEachListApi})(ClassContent) ;
