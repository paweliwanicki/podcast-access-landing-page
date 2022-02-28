import * as React from "react";
import MainContainer from "../components/MainContainer/MainContainer";
import * as classes from "../style/index.module.scss";
import Helmet from "react-helmet";

const IndexPage = () => {
  return (
    <div className={classes.content}>
      <Helmet>
        <title>Podcast access landing page</title>
      </Helmet>
      <MainContainer />
    </div>
  );
};

export default IndexPage;
