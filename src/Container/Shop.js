import React, { Component } from 'react'
import PageTitle from '../Components/PageTitle';
import './styles/shop.css';
import data from '../assets/texts';
import { pathName } from '../utils/textUtils';
import ShopContent from '../Components/ShopContent';

export default class Shop extends Component {
    state = {
        texts: data.pages[pathName(this.props.params.match.path)],
    };

    componentWillMount() {
        this.props.getActualPage('boutique');
    }
    
  render() {
    return (
    <div className="metaContainer">
        <div className="pageTitleWrapper">
            <PageTitle title={this.state.texts.pageTitle} />
        </div>
        <div className="shopContainer">
            <ShopContent />
        </div>
    </div>
    )
  }
}
