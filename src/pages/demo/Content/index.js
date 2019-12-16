
import React, { Component,Fragment } from 'react';
import { Carousel } from 'antd';
import {connect} from "react-redux";
import {Icon} from "antd";
import {Link} from "react-router-dom";
import BScroll from 'better-scroll';
import "@/assets/css/index/Content.css";
import "@/assets/css/global.css"
import {Datab} from "./reducer/content";
import {getMyApi} from "../../my/reducers/my.redux"

class Content extends Component {
    constructor(props){
        super(props) 
        this.state={
            list:[],
            lists:[],
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        this.props.Datab(96)  
        console.log(this.refs) 
        const scrollA = this.refs.scrollbox
        const scroll = new BScroll(scrollA,{
            scrollX: true,
            click: true
        })
        this.props.getMyApi();
    }
    handleClick(){
        this.setState(()=>{
            console.log(123)
        })
    }

    render() {
        const {listing} = this.props.Login;
        console.log(listing);
        const {myData} = this.props.mydata;
        return (
        <div className="content">
            <Carousel autoplay className="carousel">
                <div>
                    <h3><img src="http://oss.egu365.com/upload/974a13af15964fc9a628c9a5c72da87d.jpg" /></h3>
                </div>
                <div>
                    <h3><img src="http://oss.egu365.com/upload/a7eba13f8c234661a2cded96d1bccbe3.jpg" /></h3>
                </div>
                <div>
                    <h3><img src="http://oss.egu365.com/upload/7fdb65045238457890bddb09d9303ebb.jpg" /></h3>
                </div>
                <div>
                    <h3><img src="http://oss.egu365.com/upload/f7f12de919e1420baffa4e82a207360e.jpg" /></h3>
                </div>
                <div>
                    <h3><img src="http://oss.egu365.com/upload/48398a500957436d81a858fdf512d72d.jpg" /></h3>
                </div>
            </Carousel>
            <ul className="menu-flex">
                <li>
                    <div className="menu-img">
                        <img src="http://oss.egu365.com/upload/mobile-home-01-190308.jpg" />
                    </div>
                    <div className="menu-text">余额充值</div>
                </li>
                <li>
                    <div className="menu-img">
                        <h3><img src="http://oss.egu365.com/upload/mobile-home-02-190308.jpg" /></h3>
                    </div>
                    <div className="menu-text">宅配专区</div>
                </li>
                <li>
                    <div className="menu-img">
                        <h3><img src="http://oss.egu365.com/upload/mobile-home-03-190308.jpg" /></h3>
                    </div>
                    <div className="menu-text">卡卷兑换</div>
                </li>
                <li>
                    <div className="menu-img">
                        <h3><img src="http://oss.egu365.com/upload/mobile-home-04-190308.jpg" /></h3>
                    </div>
                    <div className="menu-text">特色预定</div>
                </li>
                <li>
                    <div className="menu-img">
                        <h3><img src="http://oss.egu365.com/upload/mobile-home-05-190308.jpg" /></h3>
                    </div>
                    <div className="menu-text">订单查询</div>
                </li>
            </ul>
            <ul className="classify-flex">
                <li>
                    <div className="classify-img">
                        <img src="http://oss.egu365.com/upload/mobile-fresh-fruit.jpg" />
                    </div>
                    <div className="classify-text">新鲜水果</div>
                </li>
                <li>
                    <div className="classify-img">
                        <img src="http://oss.egu365.com/upload/mobile-green-vegetable-basket.jpg" />
                    </div>
                    <div className="classify-text">绿色菜篮</div>
                </li>
                <li>
                    <div className="classify-img">
                        <img src="http://oss.egu365.com/upload/mobile-grain-and-oil-seasoning.jpg" />
                    </div>
                    <div className="classify-text">粮油调味</div>
                </li>
                <li>
                    <div className="classify-img">
                        <img src="http://oss.egu365.com/upload/mobile-dry-goods-specialties.jpg" />
                    </div>
                    <div className="classify-text">干货特产</div>
                </li>
                <li>
                    <div className="classify-img">
                        <img src="http://oss.egu365.com/upload/mobile-retail-beverage.jpg" />
                    </div>
                    <div className="classify-text">零食饮料</div>
                </li>
                <li>
                    <div className="classify-img">
                        <img src="http://oss.egu365.com/upload/mobile-famous-tea-with-good-wine.jpg" />
                    </div>
                    <div className="classify-text">美酒茗茶</div>
                </li>
                <li>
                    <div className="classify-img">
                        <img src="http://oss.egu365.com/upload/mobile-gift-coupons.jpg" />
                    </div>
                    <div className="classify-text">礼品礼券</div>
                </li>
                <li>
                    <div className="classify-img">
                        <img src="http://oss.egu365.com/upload/mobile-home-kitchen.jpg" />
                    </div>
                    <div className="classify-text">家居厨卫</div>
                </li>
                <li>
                    <div className="classify-img">
                        <img src="http://oss.egu365.com/upload/mobile-creative-appliances.jpg" />
                    </div>
                    <div className="classify-text">创意家电</div>
                </li>
                <li>
                    <div className="classify-img">
                        <img src="http://oss.egu365.com/upload/mobile-all-categories.jpg" />
                    </div>
                    <div className="classify-text">全部分类</div>
                </li>
            </ul>
            <Carousel autoplay className="carousel-x">
                <div>
                    <img src="http://oss.egu365.com/upload/a0dda793ddda48ad9e9730b8a705c96f.png" />
                </div>
                <div>
                    <img src="http://oss.egu365.com/upload/57d218cfca4d48119b96d7f60aad107d.png" />
                </div>
                <div>
                    <img src="http://oss.egu365.com/upload/4da863ed282e47e79d151636986151bd.png" />
                </div>
                <div>
                    <img src="http://oss.egu365.com/upload/68ac43ed13ad4c1db4c881656b080327.gif" />
                </div>
                <div>
                    <img src="http://oss.egu365.com/upload/b1931548897b4c3d8d4fca94e5aec9e1.png" />
                </div>
            </Carousel>
            <div className="early" style={{position:"relative",height:"300px"}}>
                <img src="http://m.egu365.com/img/hot_sale_bg.jpg" style={{height:"300px"}} />
                <div className="early-wrap" style={{position:"absolute",top:"0"}}>
                    <img src="http://oss.egu365.com/upload/9d2a8e1287f54590be66e077868ebebf.png" style={{height:"300px"}} />
                    <p style={{position:"absolute",color: "#788976",right:"0",fontSize:"10px",paddingRight:"10px",marginTop:"-213px"}}>查看更多》</p>
                    <div className="early-goods-wrap">
                        <img src="http://m.egu365.com/img/new.png" className="early-new-lab"/>
                        <img src="http://m.egu365.com/img/strawberry.png" className="early-sb-lab"/>
                        <div className="early-goods-head">
                            <div className="early-head-title">尝鲜季</div>
                            <div className="early-head-desc">购鲜，每月一次的舌尖之旅</div>
                        </div>
                        <ul className="early-goods-list">
                            <li>
                                <img src="http://oss.egu365.com/upload/e308f2bb34e740b09e7b0845f5281410.jpg" />
                                <div className="early-goods-name">梅县精选沙田柚（猪油灌）4个装</div>
                            </li>
                            <li>
                                <img src="http://oss.egu365.com/upload/83892508caab7bb46f6b271.jpg" />
                                <div className="early-goods-name">海南千禧樱桃番茄1.75kg</div>
                            </li>
                            <li>
                                <img src="http://oss.egu365.com/upload/6568e8cd6de03954c33a090.jpg" />
                                <div className="early-goods-name">台湾释迦2个装</div>
                            </li>
                            <li>
                                <img src="http://oss.egu365.com/upload/fc1546db295e4d5ca222ccddc19b2a39.jpg" />
                                <div className="early-goods-name">山东烟台北纬37°金富士5.5斤</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sell-well">
                <img src="http://oss.egu365.com/upload/7ee2afc581e54a31b4fb0bcdd28e4aaa.png" />
                <div className="sell-well-wrap">
                    <img src="http://m.egu365.com/img/top_sale.png" className="sell-new-lab" />
                    <div className="sell-goods-head">
                        <div className="sell-head-title">热销榜</div>
                        <div className="sell-head-desc">热卖，单品销量名次排行榜</div>
                    </div>
                    <ul className="sell-goods-list">
                        <li>
                            <img src="http://oss.egu365.com/upload/27b275577e9d4365b1d125a36d08b4e3.jpg" />
                            <div className="sell-ranking" style={{width:"34px",height:"20px"}}>
                                1
                            </div>
                            <div className="sell-goods-name">韩国进口农心辛拉面多连包120g*5</div>
                            <div className="sell-goods-price">
                                29.90
                            </div>
                        </li>
                        <li>
                            <img src="http://oss.egu365.com/upload/3d6fdd79a7d54d70a05b69295dd76653.jpg" />
                            <div className="sell-ranking" style={{width:"34px",height:"20px"}}>
                                2
                            </div>
                            <div className="sell-goods-name">悠哈-酷露露桃子味软糖52g*3</div>
                            <div className="sell-goods-price">
                                29.80
                            </div>
                        </li>
                        <li>
                            <img src="http://oss.egu365.com/upload/94a0bed7072a4c698a612ce85d68780a.jpg" />
                            <div className="sell-ranking" style={{width:"34px",height:"20px"}}>
                                3
                            </div>
                            <div className="sell-goods-name">印尼longberry挂耳咖啡（Longberry）50g</div>
                            <div className="sell-goods-price">
                                49.00
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <img src="http://m.egu365.com/img/today_advise.jpg" style={{width:"100%",height:"58px"}} />
            <div className="recommend-lump">
                <div className="view-more" onClick={this.handleClick}>查看更多》</div>
                <img src="http://oss.egu365.com/upload/fresh-fruit-bg-190314.jpg" />         
                <div className="swiper-container" ref="scrollbox">
                <div className="swiper-wrapper">
                    {
                        listing.length&&listing[0].map((item,index)=>{
                            console.log(item)
                            return (<div className="swiper-slide" key={index}>
                                <img src={item.bseGoodsEo.goodsImg} />
                                <div className="slide-pro-tl">{item.goodsName}</div>
                                <div className="slide-price-cart">
                                    <i className="slide-pro-pri">{item.mallPrice}.00</i>
                                    <i className="iconfont icon-icon-test"></i>
                                </div>
                            </div>)
                        })  
                    }
                    </div>
                </div> 
            </div>
            <div className="recommend-lump">
                <div className="view-more" onClick={this.handleClick}>查看更多》</div>
                <img src="http://oss.egu365.com/upload/green-basket-bg-190314.jpg" />         
                <div className="swiper-container" ref="scrollbox">
                <div className="swiper-wrapper">
                    {
                        listing.length&&listing[0].map((item,index)=>{
                            return (<div className="swiper-slide" key={index}>
                                <img src={item.bseGoodsEo.goodsImg} />
                                <div className="slide-pro-tl">{item.goodsName}</div>
                                <div className="slide-price-cart">
                                    <i className="slide-pro-pri">{item.mallPrice}.00</i>
                                    <i className="iconfont icon-icon-test"></i>
                                </div>
                            </div>)
                        })  
                    }
                    </div>
                </div> 
            </div>
            <div className="recommend-lump">
                <div className="view-more" onClick={this.handleClick}>查看更多》</div>
                <img src="http://oss.egu365.com/upload/grain-oil-seasoning-bg-190314.jpg" />         
                <div className="swiper-container" ref="scrollbox">
                <div className="swiper-wrapper">
                    {
                        listing.length&&listing[0].map((item,index)=>{
                            return (<div className="swiper-slide" key={index}>
                                <img src={item.bseGoodsEo.goodsImg} />
                                <div className="slide-pro-tl">{item.goodsName}</div>
                                <div className="slide-price-cart">
                                    <i className="slide-pro-pri">{item.mallPrice}.00</i>
                                    <i className="iconfont icon-icon-test"></i>
                                </div>
                            </div>)
                        })  
                    }
                    </div>
                </div> 
            </div>
            <div className="recommend-lump">
                <div className="view-more" onClick={this.handleClick}>查看更多》</div>
                <img src="http://oss.egu365.com/upload/dry-bulk-products-bg-190314.jpg" />         
                <div className="swiper-container" ref="scrollbox">
                <div className="swiper-wrapper">
                    {
                        listing.length&&listing[0].map((item,index)=>{
                            return (<div className="swiper-slide" key={index}>
                                <img src={item.bseGoodsEo.goodsImg} />
                                <div className="slide-pro-tl">{item.goodsName}</div>
                                <div className="slide-price-cart">
                                    <i className="slide-pro-pri">{item.mallPrice}.00</i>
                                    <i className="iconfont icon-icon-test"></i>
                                </div>
                            </div>)
                        })  
                    }
                    </div>
                </div> 
            </div>
            <div className="recommend-lump">
                <div className="view-more" onClick={this.handleClick}>查看更多》</div>
                <img src="http://oss.egu365.com/upload/snack-beverage-bg-190314.jpg" />         
                <div className="swiper-container" ref="scrollbox">
                <div className="swiper-wrapper">
                    {
                        listing.length&&listing[0].map((item,index)=>{
                            return (<div className="swiper-slide" key={index}>
                                <img src={item.bseGoodsEo.goodsImg} />
                                <div className="slide-pro-tl">{item.goodsName}</div>
                                <div className="slide-price-cart">
                                    <i className="slide-pro-pri">{item.mallPrice}.00</i>
                                    <i className="iconfont icon-icon-test"></i>
                                </div>
                            </div>)
                        })  
                    }
                    </div>
                </div> 
            </div>
            <div className="recommend-lump">
                <div className="view-more" onClick={this.handleClick}>查看更多》</div>
                <img src="http://oss.egu365.com/upload/wine-tea-bg-190314.jpg" />         
                <div className="swiper-container" ref="scrollbox">
                <div className="swiper-wrapper">
                    {
                        listing.length&&listing[0].map((item,index)=>{
                            return (<div className="swiper-slide" key={index}>
                                <img src={item.bseGoodsEo.goodsImg} />
                                <div className="slide-pro-tl">{item.goodsName}</div>
                                <div className="slide-price-cart">
                                    <i className="slide-pro-pri">{item.mallPrice}.00</i>
                                    <i className="iconfont icon-icon-test"></i>
                                </div>
                            </div>)
                        })  
                    }
                    </div>
                </div> 
            </div>
            <div className="recommend-lump">
                <div className="view-more" onClick={this.handleClick}>查看更多》</div>
                <img src="http://oss.egu365.com/upload/gift-voucher-bg-190314.jpg" />         
                <div className="swiper-container" ref="scrollbox">
                <div className="swiper-wrapper">
                    {
                        listing.length&&listing[0].map((item,index)=>{
                            return (<div className="swiper-slide" key={index}>
                                <img src={item.bseGoodsEo.goodsImg} />
                                <div className="slide-pro-tl">{item.goodsName}</div>
                                <div className="slide-price-cart">
                                    <i className="slide-pro-pri">{item.mallPrice}.00</i>
                                    <i className="iconfont icon-icon-test"></i>
                                </div>
                            </div>)
                        })  
                    }
                    </div>
                </div> 
            </div>
            <div className="recommend-lump">
                <div className="view-more" onClick={this.handleClick}>查看更多》</div>
                <img src="http://oss.egu365.com/upload/home-kitchen-bg-190314.jpg" />         
                <div className="swiper-container" ref="scrollbox">
                <div className="swiper-wrapper">
                    {
                        listing.length&&listing[0].map((item,index)=>{
                            return (<div className="swiper-slide" key={index}>
                                <img src={item.bseGoodsEo.goodsImg} />
                                <div className="slide-pro-tl">{item.goodsName}</div>
                                <div className="slide-price-cart">
                                    <i className="slide-pro-pri">{item.mallPrice}.00</i>
                                    <i className="iconfont icon-icon-test"></i>
                                </div>
                            </div>)
                        })  
                    }
                    </div>
                </div> 
            </div>
            <div className="recommend-lump">
                <div className="view-more" onClick={this.handleClick}>查看更多》</div>
                <img src="http://oss.egu365.com/upload/domestic-appliance-bg-190314.jpg" />         
                <div className="swiper-container" ref="scrollbox">
                <div className="swiper-wrapper">
                    {
                        listing.length&&listing[0].map((item,index)=>{
                            return (<div className="swiper-slide" key={index}>
                                <img src={item.bseGoodsEo.goodsImg} />
                                <div className="slide-pro-tl">{item.goodsName}</div>
                                <div className="slide-price-cart">
                                    <i className="slide-pro-pri">{item.mallPrice}.00</i>
                                    <i className="iconfont icon-icon-test"></i>
                                </div>
                            </div>)
                        })  
                    }
                    </div>
                </div> 
            </div>
            <div className="mainList">
                        <div className="like">
                                <img src="http://m.egu365.com/img/guess_you_like.jpg"/>
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
                                                    src={item.bigImg}
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
                        </div>
                    </div>
                    
        </div>
    );
  }
}
 
const mapStateToProps = (state) =>{
    return {
        Login: state.content,
        mydata : state.myData
    }
    
}
export default connect(mapStateToProps,{Datab,getMyApi})(Content);
