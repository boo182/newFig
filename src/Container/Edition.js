import React, { Component } from 'react'
import PageTitle from '../Components/PageTitle';
import EditionText from '../Components/EditionText';
import './styles/edition.css';
import data from '../assets/texts';
import { pathName } from '../utils/textUtils';

export default class Edition extends Component {
state = {
    texts: data.pages[pathName(this.props.params.match.path)],
};

componentWillMount() {
    this.props.getActualPage('edition');
}

render() {
      
    return (
        <div className="metaContainer">
            <div className="pageTitleWrapper">
                <PageTitle title={this.state.texts.pageTitle} />
            </div>
            <div className="edtionTextContainer">
                <EditionText subtitle={this.state.texts.subtitle} text={this.state.texts.edition_fig} />
            </div>
        </div>
    )
  }
}
