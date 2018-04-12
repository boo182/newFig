import React, { Component } from 'react'
import './styles/titleBackground.css';
import * as Rx from 'rxjs';

export default class TitleBackGround extends Component {
  state = {
    fontSize: window.innerWidth / 2.3,
    figFontSize: window.innerWidth / 2.8,
    showSubTitle: true,
  }
  componentWillMount () {

    this.resizeEvent = Rx.Observable.fromEvent(window, 'resize')
        .subscribe(() =>
          this.setState({
            fontSize: window.innerWidth / 2.3,
            figFontSize: window.innerWidth / 2.8,
          })
        )
  }
  render() {
    const { display } = this.props;
      return (
        <div className="backgroundTitleWrapper">
          <div className="revue" style={{ fontSize: this.state.fontSize, opacity: display ? 1 : 0.1 }}>revue</div>
          <div className="bottom-title">
              <div className="fig" style={{ fontSize: this.state.fontSize, opacity: display ? 1 : 0.1 }}>fig.</div>
              {this.props.display && <div className="subtitle">Revue indépendante de critique architecturale</div>}
          </div>
      </div>
      )
  }
}


