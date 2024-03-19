import React from "react";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Content5 from "./components/Content5";
import Content4 from "./components/Content4";
import Content3 from "./components/Content3";
import Content6 from "./components/Content6";
import Content7 from "./components/Content7";
import Content8 from "./components/Content8";

const MainPage = () => {
  return (
    <React.Fragment>
      <section>
        <div className="layout">
          <div className="content1 centered">
            <Content1 />
          </div>
          <div className="content2 centered">
            <Content2 />
          </div>
          <div className="content3 centered">
            <Content3 />
          </div>
          <div className="content4 centered">
            <Content4 />
          </div>
          <div className="content5 centered">
            <Content5 />
          </div>
          <div className="content6 centered">
            <Content6 />
          </div>
          <div className="content7 centered">
            <Content7 />
          </div>
          <div className="content8 centered">
            <Content8 />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;
