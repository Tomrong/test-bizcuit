import "./App.css";
import { PureComponent, Fragment } from "react";

import Main from "./components/Main/main";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <Main />
      </Fragment>
    );
  }
}

export default App;
