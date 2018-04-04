import React, { Component } from 'react'
import PageTitle from '../Components/PageTitle';
import EditionText from '../Components/EditionText';
import './styles/edition.css';
import data from '../assets/texts';
import { pathName } from '../utils/textUtils';

export default class Edition extends Component {
     state = {
        texts: data.pages[pathName(this.props.match.path)],
     }
  render() {
      console.log(pathName(this.props.match.path));
    return (
        <div className="metaContainer">
            <PageTitle title={this.state.texts.pageTitle} />
            <EditionText subtitle={this.state.texts.subtitle} text={this.state.texts.edition_fig} />
        </div>
    )
  }
}
