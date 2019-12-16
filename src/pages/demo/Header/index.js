import React, { Component } from 'react'
import { Input } from 'antd';
import BScroll from 'better-scroll';
import "@/assets/css/index/Header.css";
import "@/sousuo/iconfont.css";

const { Search } = Input;

export default class Header extends Component {
    componentDidMount(){
        const scrollA = this.refs.scrollA
        const scroll = new BScroll(scrollA,{
            scrollX: true,
            click: true
        })
    }
    render() {
        return (
            <div className="header">
                <div className="header-box" ref="scrollA">
                    <div className="header-srcoll" ref="scrollB">
                        <div className="van-box">
                            <div className="van-tab">
                                <span className="van-ellipsis">依谷热卖</span>
                            </div>
                            <div className="van-tab">
                                <span className="van-ellipsis">新鲜水果</span>
                            </div>
                            <div className="van-tab">
                                <span className="van-ellipsis">绿色菜篮</span>
                            </div>
                            <div className="van-tab">
                                <span className="van-ellipsis">粮油调味</span>
                            </div>
                            <div className="van-tab">
                                <span className="van-ellipsis">干货特产</span>
                            </div>
                            <div className="van-tab">
                                <span className="van-ellipsis">零食饮料</span>
                            </div>
                            <div className="van-tab">
                                <span className="van-ellipsis">美酒茗茶</span>
                            </div>
                            <div className="van-tab">
                                <span className="van-ellipsis">礼品礼券</span>
                            </div>
                            <div className="van-tab">
                                <span className="van-ellipsis">家居厨卫</span>
                            </div>
                            <div className="van-tab">
                                <span className="van-ellipsis">创意家电</span>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <Search className="search"
                        placeholder="保温杯"
                        onSearch={value => console.log(value)}
                        style={{borderRadius:"10px"}}
                        />
                    </div>  
                </div>
                 
            </div>
        )
    }
}
