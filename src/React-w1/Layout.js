import React, { Component } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Pagec from './Pagec'
import Footer from './Footer'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Header/>
                <Pagec/>
                <Footer/>
            </div>
        )
    }
}
