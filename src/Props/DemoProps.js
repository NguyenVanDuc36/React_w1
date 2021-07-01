import React, { Component } from 'react'
import Card from './Card'


export default class DemoProps extends Component {

    arrProduct = [
        {id:1,name:'Iphone',gia:1000,image:'https://picsum.photos/id/10/200/200'},
        {id:2,name:'Samsung',gia:1000,image:'https://picsum.photos/id/10/200/200'},
        {id:3,name:'Redmi',gia:1000,image:'https://picsum.photos/id/10/200/200'},
    ]

    renderProduct =  () =>{
        const jsx = this.arrProduct.map((item,index) =>{
            return <div className="col-4" key={index}>
                <Card SP={item} />
            </div>
        })
        return jsx;
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
