import React from "react";
import * as classes from "./MainContainer.module.scss";
import BrandIcons from "../BrandIcons/BrandIcons";
import CustomImage from "../CustomImage/CustomImage";
import BlueContainer from "../BlueContainer/BlueContainer";
import FormContainer from "../utils/FormContainer/FormContainer";
import TextBox from "../utils/TextBox/TextBox";
import dots from "../../images/desktop/bg-pattern-dots.svg";
import logoImage from "../../images/desktop/logo.svg";
import CustomHeader from "../utils/CustomHeader/CustomHeader";

const MainContainer = (props) => {
  const textBox =
    "Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!";

  return (
    <div className={classes.mainContainer}>
      <CustomImage src={logoImage} alt={`podcast logo`} className={`logo`} />
      <BlueContainer>
        <CustomHeader mainText={`Publish your podcasts`} text={`everywhere.`} />
        <TextBox text={textBox} color={`blueLight`} />
        <FormContainer inputID={`input-email`} />
        <BrandIcons />
      </BlueContainer>
      <CustomImage src={dots} alt={`dots`} className={`dots`} />
    </div>
  );
};

export default MainContainer;
