import React, { Component } from 'react';
import PageTitle from '../Components/PageTitle';
import data from '../assets/texts';
import './styles/collection.css';

export default class Collection extends Component {
    state = {
        issue: data.pages[this.props.match.params.issue],
    }
    componentWillMount() {
        
    }
  render() {
      console.log(!!this.state.issue.number);
    return (
      <div className="collectionContainer">
            <PageTitle title={this.state.issue.pageTitle} number={this.state.issue.number}/>          
      </div>
    )
  }
}
