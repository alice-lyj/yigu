import React, { Component } from 'react';
import BScroll from "better-scroll";
import {Link} from "react-router-dom"
import {Icon } from "antd";
import {connect} from "react-redux"
import "@/assets/css/my/my.css";
import {userOrder,userTwo,userThird} from "./img"
import url from "@/assets/img/myImg/not_user.jpg"
import url1 from "@/assets/img/like.png";
import lazy from "../../assets/img/myImg/lazy.jpg";
import {getMyApi} from "./reducers/my.redux";
class My extends Component {
    constructor(props){
        super(props);
        this.state={
            page : 1,
            flag :true
        }
    }
    render() {
        const {myData} = this.props.myData;
        console.log(myData);
        return (
            <div className="my" id="my" >
                {/* <div ref="inner"> */}
                    <div className="user" ref="header">
                        <div className="header" >
                                <div className="userMinPic"><img src={url} className="headerpic"/></div>
                                <div className="username" style={{fontSize:"18px",color:"#444"}}>我的</div>
                                <div className="iconBox"><Icon type="setting" className="icon"/></div>
                        </div>
                        <div className="contain">
                            <div className="pic">
                                <img src={url}/>
                            </div>
                            <div className="msg">
                                    <span style={{fontSize:"14px"}}>晚上好</span>
                                    <span style={{fontSize:"12px"}}>点击登录/点击注册</span>
                            </div>
                        </div>
                    </div>
               
                    <ul className="task">
                        {
                            userOrder.map((item)=>{
                                return (
                                    <li key={item.url} className="list">
                                        <img src={item.url}/>
                                        <span>{item.name}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className="task">
                        {
                            userTwo.map((item)=>{
                                return (
                                    <li key={item.url} className="list">
                                        <img src={item.url}/>
                                        <span>{item.name}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className="task">
                        {
                            userThird.map((item)=>{
                                return (
                                    <li key={item.url} className="list">
                                        <img src={item.url}/>
                                        <span>{item.name}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="mainList">
                        <div className="like">
                                <img src={url1}/>
                        </div>
                        <div className="product" id="imgs">
                            {
                                myData.map((item,index)=>{
                                    return(
                                        <Link className="eachProduct" key={item.id} 
                                            to={{pathname: `/goods/detail/${item.id}`, state: {data:item}}}
                                        >
                                            <div className="pic" >
                                                <img 
                                                    ref={node => this.img=node} 
                                                    src={lazy}
                                                    datasrc={item.bigImg}
                                                    className="img"
                                                />
                                            </div>
                                            <div className="name ellipsis">
                                                <span>{item.goodsName}</span>
                                            </div>
                                            <div className="price">
                                                <span>￥{item.mallPrice}</span>
                                                <div className="settingicon"><Icon type="shopping-cart" /></div>
                                                
                                            </div> 
                                        </Link>

                                    )
                                })
                            }  
                            <div className="loadding">加载中 <Icon type="loading" /></div>
                        </div>
                    </div>
                    <div className="toTop" onClick={this.backTop}>  
                    </div>
                  
                {/* </div> */}
            </div>
        )
    }
    //跳转详情页
    // goToDetail = (e,item)=>{
    //     this.props.history.push();
    // }
    //上拉刷新
    pushUpLoading(){
        const product = this.refs.product
        const loadding =document.getElementsByClassName("loadding")[0];
        if(!this.scroll){
            this.scroll = new BScroll(product,{
                scrollY : true,
                probeType : 3
            })
        }else{
            this.scroll.refresh();
        }
        this.scroll.on("touchEnd",(obj)=>{
            if( obj.y < this.scroll.maxScrollY ){
                loadding.style.display = "block";
                this.setState((prev)=>{
                    return {
                        page:++prev.page 
                    }
                })
               this.props.getMyApi(this.state.page);
            }
        })
    }
    //图片懒加载
    lazyload = ()=>{
        this.imgs = document.querySelectorAll('.img');
        let scrollTop = document.getElementsByClassName("my")[0].scrollTop
        let winH = window.innerHeight;
        for(let i = 0 ; i < this.imgs.length ; i++){
            //判断加载条件
            if(this.imgs[i].offsetTop - 100 < scrollTop + winH){
                this.imgs[i].src = this.imgs[i].getAttribute('datasrc');  
                this.imgs[i].style.opacity = 1;     
            }
        }
        const loadding = document.getElementsByClassName("loadding")[0];

        if(loadding.offsetTop < scrollTop + winH){
            loadding.style.display = "block";
            const me = this;
            if(!this.state.flag){
                return ;
            }
            me.setState({
                flag :false
            })
            setTimeout(()=>{
                me.setState((prev)=>{
                    return {
                        page:++prev.page ,
                        flag : true
                    }
                })
               me.props.getMyApi(me.state.page);
            },2000)
        }else{
            loadding.style.display = "none"
        }
    }
    backTop = ()=>{
        document.getElementsByClassName("my")[0].scrollTop=0
    }
    scrollEvent=()=>{
        this.lazyload ()
        const toTop = document.getElementsByClassName("toTop")[0];
        const header = document.getElementsByClassName("header")[0];
        const headerpic = document.getElementsByClassName("headerpic")[0];
        const username = document.getElementsByClassName("username")[0];
        const settingicon = document.getElementsByClassName("settingicon")[0];
      
        if(document.getElementsByClassName("my")[0].scrollTop >=200){
            toTop.style.display ="block";
            header.style.color ="#444";
            header.style.background="#fff";
            header.style.position = "fixed";
            header.style.top="0";
            settingicon.style.color = "#444"
            headerpic.style.display = "block";
            username.style.display = "block";
        }else{
            toTop.style.display ="none";
            header.style.position = "static";
            headerpic.style.display = "none";
            username.style.display = "none";
            header.style.color ="#fff";
            header.style.background="";
        };
    }
    componentDidMount(){
        this.props.getMyApi();
        this.scrollEvent();
        document.getElementsByClassName("my")[0].addEventListener("scroll",this.scrollEvent); 
       
    }
}
const mapStateTopProps =state=>{
    return {
        myData : state.myData
    }
}
export default connect(mapStateTopProps,{getMyApi})(My);
