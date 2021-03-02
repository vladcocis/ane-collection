import React from 'react';
import Fab from '@material-ui/core/Fab';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function FloatingActionButtons() {
  return (
    <div className='root'>
        <div className='icon__container'>
            <Fab color="primary" aria-label="call">
            <a href="tel:+447470718754"><PhoneIcon/></a>
            </Fab>
        </div>
      <div className='icon__container'>
        <Fab color="secondary" aria-label="facebook">
            <a href="https://www.facebook.com/RoxxanaPop" target = "_blank" rel='noopener noreferrer'><FacebookIcon/></a>
        </Fab>
      </div>
      <div className='icon__container'>
        <Fab color="secondary" aria-label="instagram">
        <a href="https://www.instagram.com/roxanaaapop/" target = "_blank" rel='noopener noreferrer'><InstagramIcon/></a>
        </Fab>
      </div>
    </div>
  );
}