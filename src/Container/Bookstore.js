import React, { Component } from 'react';
import PageTitle from '../Components/PageTitle';
import './styles/bookstore.css';
import data from '../assets/texts';
import { pathName } from '../utils/textUtils';

export default class Bookstore extends Component {
    state = {
        page: data.pages[pathName(this.props.params.match.path)],
    };
    
    componentWillMount() {
        this.props.getActualPage('librairies');
    }

    render() {
        return (
        <div className="bookstoreContainer">
            <div className="pageTitle">
                <PageTitle title={this.state.page.pageTitle} />
            </div>
            <div className="bookstores">
                {data.pages.librairies.adresses.map(item =>
                    <p className="bookstore"><b>{item.city}</b>{item.detail}</p>
                )}
            </div>
        </div>
        )
    }
}
