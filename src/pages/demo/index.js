import React, { Component } from 'react';
import Header from "./Header";
import Content from "./Content";

class Index extends Component {
    render() {
        return (
            <div style={{height:"100%",overflowY:"scroll"}}>
                <Header />
                <Content />
            </div>
        )
    }
}
export default Index;