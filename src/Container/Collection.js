import React, { Component } from 'react';
import data from '../assets/texts';

export default class Collection extends Component {
    state = {
        issue: data.pages[this.props.match.params.issue],
    }
    componentWillMount() {
        
    }
  render() {
      console.log(this.state);
    return (
      <div>
        Collection
      </div>
    )
  }
}
