import React from 'react'
import './styles/orderIssue.css';
import { NavLink } from 'react-router-dom'; 

export default () => {
  return (
    <div className="issueOrdertWrapper">
        <NavLink to="/" className="orderBolderFont">commander</NavLink>
    </div>
  )
}
