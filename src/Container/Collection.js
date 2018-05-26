import React, { Component } from 'react';
import PageTitle from '../Components/PageTitle';
import data from '../assets/texts';
import ImageCarousel from '../Components/ImageCarousel';
import './styles/collection.css';
import * as Rx from 'rxjs';

export default class Collection extends Component {
    state = {
        issue: data.pages.pleonasme,
        isSmallScreen: false,
    }
    componentWillMount() {
      this.setState({ isSmallScreen: window.innerWidth <= 1140 || false });
      this.props.getActualPage('collection');
      this.resizeEvent = Rx.Observable.fromEvent(window, 'resize')
          .subscribe(() => this.setState({ isSmallScreen: window.innerWidth <= 1140 || false }))
    }
    componentWillUnmount() {
      this.resizeEvent.unsubscribe();
    }
    setTitle = (title) => {
      this.props.getIssue(title);
      this.setState({issue: data.pages[title]});
    } 
   render() {
    const { issue } = this.state;

    return (
      <div className="collectionContainer">
          {this.state.isSmallScreen
            ? <div className="pageTitle">
              <PageTitle title='Collection' />
              </div>
            : <div className="pageTitle">
            <PageTitle title={issue.pageTitle} number={issue.number}/>
          </div>}
          <ImageCarousel setTitle={this.setTitle}/>
      </div>
    )
  }
}
