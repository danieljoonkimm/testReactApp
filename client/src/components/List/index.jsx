import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();
  }

  constructList() {
    const listHeader = "This is my List";
    const list = ["first", "second", "third", "fourth", "fifth"];

    let constructingList = list.map( (list, index) => {
      return (
        <div>
          <li key={index}>{list}</li>
        </div>
      )
    })

    return(
      <div>
        <h1>{listHeader}</h1>
        {constructingList}
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <ol>{this.constructList()}</ol>
      </div>
    );
  }
}

export default List;
