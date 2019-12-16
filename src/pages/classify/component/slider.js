import React, { Component } from 'react';
import {Layout} from "antd";
import {connect} from "react-redux";

import {getSortApi,getSliderApi} from "../reducers/header.redux";

const { Sider } = Layout;

   var   color = [  "rgb(185, 214, 127)",
                    "rgb(150, 217, 151)",
                    "rgb(238, 209, 155)",
                    "rgb(235, 198, 177)",
                    "rgb(145, 221, 213)",
                   " rgb(176, 214, 222)",
                    "rgb(191, 166, 229)",
                    "rgb(234, 176, 231)",
                    "rgb(176, 200, 242)"

                ]
 
class  ClassSlider extends Component{
    constructor(props){
        super(props);
        this.state ={
            index : 0
        }
    }
    render() {
        const {sliderData} = this.props.sort;
        return (
            <Sider className="slider" width={{width:"25%"}}>
                <ul className="list">
                {
                    sliderData.map((item,index)=>{ 
                        return (
                            <li 
                                className="listEach"
                                key={item.tname}
                                id={ index === this.state.index ? "bg":""}
                                ref="change"
                                onClick ={(ev)=>this.changeBg(index)}
                            >
                                <i className="listBar" style={{background:color[index],pointerEvents:"none"}}></i>
                                {item.tname}
                            </li>
                        )
                    })
                }  
                </ul>
            </Sider>
        )
    }
    changeBg = async (index)=>{
            await this.setState({index})
            this.props.getSortApi(this.state.index);
    }
    componentDidMount(){
        this.props.getSliderApi(0);  
        this.props.getSortApi(this.state.index);
        this.changeBg(this.state.index)
    }
}
const mapStateToProps = state=>{
    return {
        sort : state.sortData
    }
}

export default connect(mapStateToProps,{getSortApi,getSliderApi})(ClassSlider);
