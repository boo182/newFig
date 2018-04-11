import React, { Component } from 'react';
import PageTitle from '../Components/PageTitle';
import data from '../assets/texts';
import IssueCarousel from '../Components/IssueCarousel';
import './styles/collection.css';

export default class Collection extends Component {
    state = {
        issue: data.pages[this.props.params.match.params.issue],
    }
    componentWillMount() {
      this.props.getActualPage('collection');
    }
  render() {
    return (
      <div className="collectionContainer">
          <div className="pageTitle">
            <PageTitle title={this.state.issue.pageTitle} number={this.state.issue.number}/>
          </div>
            <IssueCarousel issue={this.state.issue.pageTitle}/>      
      </div>
    )
  }
}
