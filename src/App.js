import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";
import Content from "./containers/Content/Content";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Content />
        </Layout>
      </div>
    );
  }
}

export default App;
