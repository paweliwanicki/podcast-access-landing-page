import React from 'react';
import * as classes from '../style/BrandIcons.module.scss';
import BrandIcon from './BrandIcon';
import spotifyIcon from '../images/desktop/spotify.svg';
import applePodcastIcon from '../images/desktop/apple-podcast.svg';
import pocketCastsIcon from '../images/desktop/pocket-casts.svg';
import googlePodcastsIcon from '../images/desktop/google-podcasts.svg';


const brandIcons = (props) => {
  return <div className={classes.brandIcons}>
    <BrandIcon src={spotifyIcon} title={`Spotify`} alt={`Spotify`} label={`spotify`}/>
    <BrandIcon src={applePodcastIcon} title={`Apple Podcast`} alt={`Apple Podcast`} label={`apple`}/>
    <BrandIcon src={googlePodcastsIcon} title={`Google Podcasts`} alt={`Google Podcasts`} label={`google`}/>
    <BrandIcon src={pocketCastsIcon} title={`Pocket Casts`} alt={`Pocket Casts`} label={`pocket`}/>
  </div>
}

export default brandIcons;