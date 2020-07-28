import React, { Component } from "react";

import Banner from "../../components/BreakfastDeals/Banner/Banner";
import CenterContent from "../../components/BreakfastDeals/CenterContent/CenterContent";
import Footer from "../../components/BreakfastDeals/Footer/Footer";

class Content extends Component {
  render() {
    return (
      <div>
        <Banner />
        <CenterContent />
        <Footer />
      </div>
    );
  }
}

export default Content;
