import React, { Component } from "react";

export default class ListSPKinh extends Component {
  arrSP = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    spChiTiet: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  xemChiTiet = (SP) => {
    this.setState({
      spChiTiet: SP,
    });
  };

  renderSP = () => {
    const jsx = this.arrSP.map((item, index) => {
      return (
        <img
          src={item.url}
          alt="..."
          className="col-2 mt-5"
          style={{ height: "50px",border:"groove",gridGap:"2rem",margin:"18px"}}
          onClick={()=>{this.xemChiTiet(item)}}
        ></img>
      );
    });
    return jsx;
  };

  render() {
    let sanpham = this.state.spChiTiet;
    return (
      <div className="container-fluid myDemo">
        <h3 className="title">TRY GLASS APP ONLINE</h3>
        <div className="myModal pt-5 mt-5 container">
          <div className="row">
            <div className="col-6 text-center">
                <img src="./img/model.jpg" alt="..." className="md"></img>
                <div
                  className=" text-left p-2"
                  style={{ background: "rgba(255, 68, 0, 0.329)",width:'46.4%',margin:'0 auto'}}
                >
                  <h5 style={{ color: "blue" }}>{sanpham.name} </h5>
                  <p style={{ color: "white" }}>{sanpham.desc}</p>
                  <img
                    src={sanpham.url}
                    alt="..."
                    style={{ width: "20%" }}
                    className="overLay"
                  ></img>
              </div>
            </div>
            <div className="col-6 text-center">
              <div className="card" style={{ width: "200px" }}>
                <img src="./img/model.jpg" alt="..." className="md"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="mySP container mt-5">
          <div className="row">{this.renderSP()}</div>
        </div>
      </div>
    );
  }
}
