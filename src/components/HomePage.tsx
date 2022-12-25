import React from "react";
import SortBrand from "./SortBrand";
import ItemContainer from "./ItemContainer";
import Header from "./Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className={"sort"}>
          <SortBrand />
        </div>
        <div className={"item_container"}>
          <ItemContainer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
