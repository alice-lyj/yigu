import React, { Component } from 'react';

import {otherRoutes} from "@/routes";
import "@/assets/css/classify/classify.css";

import ClassifyHeader from "./component/header";
import ClassifySlider from "./component/slider";
import ClassContent from "./component/content";
  

class Classify extends Component {
    constructor(props){
        super(props)
        this.state ={
            flag : true,
            display : "block"
        };
    }  
    jumpSearch = ()=>{
        this.props.history.push(otherRoutes[0].pathname);
    }
     //点击出现蒙层
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
    render() {
        return (
            <div className="all" style={{margin:0,padding :0}} >
                <div className="apacity" ref="all"></div>
                <ClassifyHeader changeApacity={this.changeApacity}/>
                <div className="mainContent" style={{display:"flex",height:"100%"}}>
                    <ClassifySlider/>
                    <ClassContent />
                </div>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default Classify;
