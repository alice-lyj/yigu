import React, { Component } from 'react';
import { ReactComponent as Logo } from '../assets/img/myImg/loading.svg';

export default class Loading extends Component {
    render() {
        return (
            <div 
                className="loading" 
                style={{height:"100%",width:"100%",display:"flex",justifyContent:"center",marginTop:"250px"}}
            >
               <Logo style={{height:"75px",width:"75px"}}/>
            </div>
        )
    }
}
