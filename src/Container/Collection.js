import React, { Component } from 'react';
import PageTitle from '../Components/PageTitle';
import data from '../assets/texts';
import IssueCarousel from '../Components/IssueCarousel';
import ImagesScroll from '../Components/ImagesScroll';
import ImageCarousel from '../Components/ImageCarousel';
import './styles/collection.css';
import * as Rx from 'rxjs';

export default class Collection extends Component {
    state = {
        issue: data.pages[this.props.params.match.params.issue],
        displayCarousel: true,
    }
    componentWillMount() {
      this.props.getActualPage('collection');
      this.resizeEvent = Rx.Observable.fromEvent(window, 'resize')
          .subscribe(() => this.setState({ displayCarousel: window.innerWidth >= 1140 || false }))
    }
  render() {
    const {displayCarousel, issue} = this.state;

    return (
      <div className="collectionContainer">
          <div className="pageTitle">
            <PageTitle title={issue.pageTitle} number={issue.number}/>
          </div>
            {/* {displayCarousel
            ? <IssueCarousel issue={issue.pageTitle}/>
            :<div className="carouselScroll"> 
              <ImagesScroll pictures={issue.pageTitle}/>
            </div>
            } */}
              <ImageCarousel />
            

      </div>
    )
  }
}
