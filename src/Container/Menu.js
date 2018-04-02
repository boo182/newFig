import React, { Component } from 'react'
import './styles/menu.css';
import { NavLink, Link } from 'react-router-dom';
import ContactList from '../Components/ContactList';

export default class Menu extends Component {
    state = {
        showList: false,
        showContact: false,
    }

  render() {
      const {showList, showContact} = this.state;
    return (
      <div className="menuWrapper">
        <h3 className="menuHeader">numéro 3</h3>
        <div className="menuContainer">
            <div className="buttonContainer">
                <button onClick={() => this.setState({ showList: !showList, showContact: showContact && false})}>
                    <i
                        className={`${!showList ? 'fa fa-bars fa-2x' : 'fa fa-times fa-2x' }`}>
                    </i>
                </button>
            </div>
        {this.state.showList && <div className="options">
                <ul className="list">
                    <li>
                        <NavLink to="/edition" activeStyle={{ textDecoration: 'none', color: 'black' }}>édition fig</NavLink>
                    </li>
                    <li>numéros</li>
                    <li>boutique</li>
                    <li>librairies</li>
                    <li>évènement</li>
                    <li onClick={() => this.setState({ showContact: !showContact })}>contact</li>                
                </ul>
            </div>}
        </div>
        {(showContact && showList) && <ContactList />}
      </div>
    )
  }
}
