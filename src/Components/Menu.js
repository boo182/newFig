import React, { Component } from 'react'
import './styles/menu.css';

export default class Menu extends Component {
    state = {
        showList: false,
        open: 'fa fa-bars fa-2x',
        close: 'fa fa-times fa-2x'
    }

  render() {

    return (
      <div className="menuWrapper">
        <h3>numéro 3</h3>
        <div className="menuContainer">
            <div className="buttonContainer">
                <button onClick={() => this.setState({ showList: !this.state.showList })}>
                    <i
                        className={`${!this.state.showList ? this.state.open : this.state.close }`}>
                    </i>
                </button>
            </div>
        {this.state.showList && <div className="options">
                <ul class="list">
                    <li>édition fig</li>
                    <li>numéros</li>
                    <li>boutique</li>
                    <li>librairies</li>
                    <li>évènement</li>
                    <li>contact</li>                
                </ul>
            </div>}
        </div>
      </div>
    )
  }
}
