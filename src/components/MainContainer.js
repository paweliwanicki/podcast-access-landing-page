import React from 'react';
import * as classes from '../style/MainContainer.module.scss';
import BrandIcons from './BrandIcons';
import Logo from './Logo';
import BlueContainer from './BlueContainer';
import FormContainer from './FormContainer';
import TextBox from './TextBox';
import dots from '../images/desktop/bg-pattern-dots.svg';

const mainContainer = (props) => {


  const textbox = 'Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!';

  return (
    <div className={classes.mainContainer} >
        <Logo />

        <BlueContainer>
          <h2 className={classes.header}><span className={classes.greenLightColor}>Publish your podcasts</span> everywhere.</h2>
          <TextBox className={classes.grayColor} text={textbox} color="gray"/>
          <FormContainer />
          <BrandIcons />
        </BlueContainer>
        <img src={dots} alt={`dots`} className={classes.dots} />
    </div>
  )
}

export default mainContainer;