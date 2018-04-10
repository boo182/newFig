import React, { Component, Fragment } from 'react'
import './styles/pageTitle.css';

export default class PageTitle extends Component {
  render() {
    return (
        <div className="pageTitleWrapper">
          {this.props.number
          ? <div className="issueContainer">
              <div className="issueTitle">n°<span>{this.props.number}</span></div>
              <div className="issueLine" />
              <div className="issueTitle">{this.props.title}</div>
            </div>
          :<div className="issueContainer"> 
            <div className="issueTitle">{this.props.title}</div>
            <div className="issueLine" />
          </div>
          }
        </div>
    )
  }
}
