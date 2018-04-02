import React, { Component } from 'react'
import PageTitle from '../Components/PageTitle';
import EditionText from '../Components/EditionText';
import './styles/edition.css';

export default class Edition extends Component {
  render() {
      console.log(this.props);
    return (
        <div className="metaContainer">
            <div className="titleContainer">
                    <span>edi:tion fig.</span>
                    <div className="line" />
            </div>
            <EditionText />
        </div>
    )
  }
}
