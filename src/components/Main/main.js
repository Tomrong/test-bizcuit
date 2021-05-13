import React, { PureComponent } from "react";
import { BodyStyle } from "./style";
import { Fragment } from "react";

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      beerData: {},
      previousBeer: {},
    };
  }

  getBeer = () => {
    fetch("https://random-data-api.com/api/beer/random_beer", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState((prevState) => {
          return {
            beerData: response,
            previousBeer: prevState.beerData,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getPreviousBeer = () => {
    this.setState({
      beerData: this.state.previousBeer,
      previousBeer: {},
    });
  };

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  render() {
    const { beerData } = this.state;
    return (
      <BodyStyle>
        <div className="main-body">
          <section className="container">
            <div className="typeOfBeer">
              {!this.isEmpty(beerData) ? (
                <Fragment>
                  <p>Name : {beerData.name}</p>
                  <p>Brand : {beerData.brand}</p>
                  <p>Style : {beerData.style}</p>
                  <p>Hob : {beerData.hop}</p>
                  <p>Ibu : {beerData.ibu}</p>
                  <p>Malts : {beerData.malts}</p>
                  <p>Yeast : {beerData.yeast}</p>
                </Fragment>
              ) : (
                <Fragment />
              )}
            </div>
            <div className="btnPanel">
              {!this.isEmpty(beerData) ? (
                <a onClick={() => this.getPreviousBeer()} className="nextBtn">
                  Previous Beer
                </a>
              ) : (
                <Fragment />
              )}

              <a onClick={() => this.getBeer()} className="nextBtn">
                Random Beer!
              </a>
            </div>
          </section>
        </div>
      </BodyStyle>
    );
  }
}
export default Main;
