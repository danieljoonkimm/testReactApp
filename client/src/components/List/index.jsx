import React, { Component } from "react";
// import joongrids from 'joongridstest';

class List extends Component {
  constructor() {
    super();
  }

  joongrids(options = { columns: undefined, imageURLs: undefined }) {
    let columnNum = 12;
    if (options.columns === undefined || options.imageURLs === undefined) {
      let images = [];
      options.imageURLs = "https://dummyimage.com/600x400/000/fff, https://dummyimage.com/600x400/000/fff";
      options.columns = columnNum/options.columns;

      let splitImageString = options.imageURLs.split(", ");
      let splitImageLength = splitImageString.length;

      if (splitImageLength > 0) {
        for (let i = 0; i < splitImageLength; i++) {
          images.push({
            image: splitImageString[i]
          });
        }

        let finalImages = images.map( (item, index) => {
          return (
            <div
              className={`col-xs-${12} col-sm-${columnNum/options.columns} col-md-${
                columnNum/options.columns
              } col-lg-${columnNum/options.columns}`}
            >
              <img className="img-responsive" src={item.image} alt="" />
            </div>
          );
        });

        return <div className="row">{finalImages}</div>;
      }
    } else {
      let images = [];
      let splitImageString = options.imageURLs.split(", ");
      let splitImageLength = splitImageString.length;

      if (splitImageLength > 0) {
        for (let i = 0; i < splitImageLength; i++) {
          images.push({
            image: splitImageString[i]
          });
        }
        let imagesAfterFirstRow = [];
        let grabImages = document.getElementsByClassName("img-responsive")
        let finalImages = images.map( (item, index) => {
          let cssStyles = {border: "red"}
          if(index >= options.columns && grabImages) {
            imagesAfterFirstRow.push(grabImages)
            console.log(imagesAfterFirstRow, 'hi')
          }
          return (
            <div
              className={`col-xs-${12} col-sm-${columnNum/options.columns} col-md-${columnNum/options.columns} col-lg-${columnNum/options.columns}`}
            >
              <img className="img-responsive" src={item.image} alt=""/>
            </div>
          );
        });

        return <div className="row">{finalImages}</div>;
      }
    }
  }

  render() {
    return <div className="container">{this.joongrids({
      columns: 2,
      imageURLs: "https://dummyimage.com/600x400/000/fff, https://dummyimage.com/600x400/000/fff, https://dummyimage.com/600x400/000/fff, https://dummyimage.com/600x400/000/fff"
    })}</div>;
  }
}

export default List;
