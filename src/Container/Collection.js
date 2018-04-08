import React, { Component } from 'react';
import PageTitle from '../Components/PageTitle';
import data from '../assets/texts';
import Carousel from '../Components/Carousel';
import './styles/collection.css';

export default class Collection extends Component {
    state = {
        issue: data.pages[this.props.match.params.issue],
    }
  render() {
    console.log(this.state.issue);
    return (
      <div className="collectionContainer">
          <div className="pageTitle">
            <PageTitle title={this.state.issue.pageTitle} number={this.state.issue.number}/>
          </div>
            <Carousel images={this.state.issue.images}/>      
      </div>
    )
  }
}
