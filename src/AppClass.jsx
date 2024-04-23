import React, { Component } from "react";
import "./App.css";
import elephant from "../../images/elephant.jpeg";
import DataComponents from "./Components/DataComponents";

export default class AppClass extends Component {
  render() {
    return (
      // <DataComponents></DataComponents>
       <>
    <div class='image-gallary'>
      <h1>Kalvium gallary</h1>
      {
        this.imageData().map(data=>(
          <img id={data.id} src={data.img}/>
        ))
      }
    </div>
    </>
    )
  }
}
