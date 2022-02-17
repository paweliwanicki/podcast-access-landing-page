import React from 'react';
import * as classes from './MainContainer.module.scss';
import BrandIcons from '../BrandIcons/BrandIcons';
import CustomImage from '../CustomImage/CustomImage';
import BlueContainer from '../BlueContainer/BlueContainer';
import FormContainer from '../utils/FormContainer/FormContainer';
import TextBox from '../utils/TextBox/TextBox';
import dots from '../../images/desktop/bg-pattern-dots.svg';
import logoImage from "../../images/desktop/logo.svg";

const MainContainer = (props) => {


  const textbox = 'Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!';

  return (
    <div className={classes.mainContainer} >
        <CustomImage  src={logoImage} alt={`podcast logo`} className={`logo`}/>
        <BlueContainer>
          <h2 className={classes.header}><span className={classes.greenLightColor}>Publish your podcasts</span> everywhere.</h2>
          <TextBox text={textbox} color="gray"/>
          <FormContainer inputID={`input-email`}/>
          <BrandIcons />
        </BlueContainer>
        <CustomImage  src={dots} alt={`dots`} className={`dots`} />
    </div>
  )
}

export default MainContainer;