import React from 'react';
import './styles/contactList.css';
import data from '../assets/texts';
import { NavLink } from 'react-router-dom';


export default () => {
  const {contact: {city, joinUs, fanny, hugo, followUs, facebook, email }} = data;
  return (
    <div className="contactWrapper">
      <p className="bolderFont">{city}</p>
      <p>{joinUs}</p>
      <div>
        <div>{fanny.name}</div>
        <div>{fanny.phone}</div>
        <div>{hugo.name}</div>
        <div>{hugo.phone}</div>          
      </div>
      <p className="bolderFont"><a href={`mailto:${email}`}>{email}</a></p>
      <div>{followUs}</div>
        <div className="bolderFont">
          <a href={'https://www.facebook.com/revue.fig/?ref=br_rs'}>{facebook}</a>
        </div>  
    </div>
  )
}
