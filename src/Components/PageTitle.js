import React, { Component } from 'react'
import './styles/pageTitle.css';

export default class PageTitle extends Component {
  render() {
    return (
        <div className="editionTitleWrapper">
            <div className="titleContainer">
                    <span>edi:tion fig.</span>
                    {/* <div className="line" /> */}
            </div>
        </div>
    )
  }
}
