import React from 'react';
import './styles/contactList.css';
import data from '../assets/texts';

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
      <p className="bolderFont">{email}</p>
      <div>{followUs}</div>
      <div className="bolderFont">{facebook}</div>     
    </div>
  )
}
