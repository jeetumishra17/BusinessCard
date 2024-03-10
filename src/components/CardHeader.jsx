import React from 'react';
import ProfileHeader from './ProfileHeader';
import NavLinks from './NavLinks';

const CardHeader = () => {
  return (
    <div className="card-header">
      <ProfileHeader 
        image="./profile/profile_photo.jpg"
        name="Jeetu Mishra"
        title="Owner"
        locate="Shreya Hi-Tech Security Solutions"
      />
      
      <NavLinks
        phone="9198313017"
        whatsapp="https://wa.me/9198313017?text=Hi%20Jeetu%20Mishra"
        email="shreyahitechsolution@gmail.com"
        directions="https://maps.app.goo.gl/gkAr4mzMaYdPyPNR8"
      />
    </div>
  );
}

export default CardHeader;