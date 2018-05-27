import React from 'react';
import './styles/pageTitle.css';

export default ({ number, title }) => (
  <div className="pageTitleWrapper">
    {number
        ? <div className="issueContainer">
          <div className="issueTitle">n°<span>{number}</span></div>
          <div className="issueLine" />
          <div className="issueTitle">{title}</div>
          </div>
        : <div className="issueContainer">
          <div className="issueTitle">{title}</div>
          <div className="issueLine" />
        </div>
      }
  </div>
);

