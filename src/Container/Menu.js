import React, { Component } from 'react'
import './styles/menu.css';
import { NavLink } from 'react-router-dom';
import ContactList from '../Components/ContactList';
import OrderIssue from '../Components/OrderIssue';
import * as Rx from 'rxjs';

const activeStyle = {
    fontFamily: 'Ecam-extraBold',
};

export default class Menu extends Component {
    state = {
        showList: false,
        showContact: false,
        displayOrderDiv: true,
        smallScreen: window.innerWidth <= 1140 || false,
    }

    componentWillMount () {
    if (this.props.actualPage === 'issues') {
        this.setState({ displayOrderDiv: true });
    }

    if (this.props.actualPage === '') this.setState({ displayOrderDiv: false });

    this.resizeEvent = Rx.Observable.fromEvent(window, 'resize')
        .subscribe(() => this.setState({
            displayOrderDiv: window.innerWidth <= 1140 || false,
            smallScreen: window.innerWidth <= 1140 || false
        }))
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.actualPage === 'issues' || nextProps.actualPage === 'collection') {
            this.setState({ displayOrderDiv: true });
        }
        if (this.props.actualPage !== nextProps.actualPage) {
            this.setState({ showContact: false })
        }
    }
    render() {
        const { showList, showContact, smallScreen } = this.state;
        let contactPage;

        if (smallScreen) {
            contactPage = (
                <li>
                    <NavLink
                        to="/contacts"
                        activeStyle={activeStyle}
                        onClick={() => this.setState({ displayOrderDiv: false })}>
                    contacts
                    </NavLink>
                </li>)
        } else {
            contactPage = (
                <li
                onClick={() => this.setState({ showContact: !showContact })}
                style={showContact ? activeStyle : null}
                >
                contact
                </li>);
        }

    return (
      <div className="menuWrapper">
      <div className="menuSubWrapper">
        <a href={`https://revuefig.bigcartel.com/product/fig-n4-pleonasme`} className="orderBolderFont">
            <h3 className="menuHeader">numéro 4</h3>
        </a>
        <div className="menuContainer">
            <div className="buttonContainer">
                <button onClick={() => this.setState({ showList: !showList, showContact: showContact && false})}>
                    <i
                        className={`${!showList ? 'fa fa-bars fa-2x' : 'fa fa-times fa-2x' }`}>
                    </i>
                </button>
            </div>
        {showList && <div className="options">
                <ul className="list">
                    <li>
                        <NavLink
                            to="/home"
                            onClick={() => this.setState({ displayOrderDiv: false })}
                            activeStyle={activeStyle}>fig</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/edition"
                            onClick={() => this.setState({ displayOrderDiv: false })}
                            activeStyle={activeStyle}>édition fig</NavLink>
                    </li>
                    {!smallScreen && <li>
                        <NavLink
                          to="/collection"
                          activeStyle={activeStyle}
                          onClick={() => this.setState({ displayOrderDiv: true })}>
                            numéros
                        </NavLink>
                    </li>}
                    <li>
                        <NavLink
                          to="/boutique"
                          activeStyle={activeStyle}
                          onClick={() => this.setState({ displayOrderDiv: false })}>
                            boutique
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                          to="/librairies"
                          activeStyle={activeStyle}
                          onClick={() => this.setState({ displayOrderDiv: false })}>
                            librairies
                        </NavLink>
                    </li>
                      {contactPage}
                </ul>
            </div>}
        </div>
    {(!smallScreen && showContact && showList) && <ContactList />}
        </div>
        {this.state.displayOrderDiv && <div className="orderIssue">
            {<OrderIssue issue={this.props.issue}/>}
        </div>}
      </div>
    )
  }
}
