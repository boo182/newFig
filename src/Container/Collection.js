import React, { Component } from 'react';
import PageTitle from '../Components/PageTitle';
import data from '../assets/texts';
import ImageCarousel from '../Components/ImageCarousel';
import './styles/collection.css';
import * as Rx from 'rxjs';

export default class Collection extends Component {
    state = {
        issue: data.pages.analepse,
    }
    componentWillMount() {
      this.props.getActualPage('collection');
      this.resizeEvent = Rx.Observable.fromEvent(window, 'resize')
          .subscribe(() => this.setState({ displayCarousel: window.innerWidth >= 1140 || false }))
    }
    setTitle = (title) => this.setState({issue: data.pages[title]}); 

  render() {
    const {displayCarousel, issue} = this.state;

    return (
      <div className="collectionContainer">
          <div className="pageTitle">
            <PageTitle title={issue.pageTitle} number={issue.number}/>
          </div>
          <ImageCarousel setTitle={this.setTitle}/>
      </div>
    )
  }
}
